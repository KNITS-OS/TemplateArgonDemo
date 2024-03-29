/* eslint-disable */
import { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function uniq(arr) {
  const out = [];

  for (let i = 0; i < arr.length; i++) {
    if (out.indexOf(arr[i]) === -1) {
      out.push(arr[i]);
    }
  }

  return out;
}

/* istanbul ignore next */
function getClipboardData(e) {
  if (window.clipboardData) {
    return window.clipboardData.getData("Text");
  }

  if (e.clipboardData) {
    return e.clipboardData.getData("text/plain");
  }

  return "";
}

function defaultRenderTag(props) {
  const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
  return (
    <span key={key} {...other}>
      {getTagDisplayValue(tag)}
      {!disabled && <a className={classNameRemove} onClick={e => onRemove(key)} />}
    </span>
  );
}

defaultRenderTag.propTypes = {
  key: PropTypes.number,
  tag: PropTypes.string,
  onRemove: PropTypes.func,
  classNameRemove: PropTypes.string,
  getTagDisplayValue: PropTypes.func,
};

function defaultRenderInput({ addTag, ...props }) {
  const { onChange, value, ...other } = props;
  return <input type="text" onChange={onChange} value={value} {...other} />;
}

defaultRenderInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  addTag: PropTypes.func,
};

function defaultRenderLayout(tagComponents, inputComponent) {
  return (
    <span>
      {tagComponents}
      {inputComponent}
    </span>
  );
}

function defaultPasteSplit(data) {
  return data.split(" ").map(d => d.trim());
}

const defaultInputProps = {
  className: "react-tagsinput-input",
  placeholder: "Add a tag",
};

export const TagsInput = forwardRef((props, ref) => {
  const divElementRef = useRef(null);
  const inputElementRef = useRef(null);
  const [tagState, setTagState] = useState("");
  const [isFocusedState, setIsFocusedState] = useState(false);

  useEffect(() => {
    if (hasControlledInputHook() && !inputValueHook(props)) {
    } else {
      setTagState(inputValueHook(props));
    }
  }, [props]);

  const {
    value,
    onChange,
    tagProps,
    renderLayout,
    renderTag,
    renderInput,
    addKeys,
    removeKeys,
    className,
    focusedClassName,
    addOnBlur,
    addOnPaste,
    inputProps,
    pasteSplit,
    onlyUnique,
    maxTags,
    validate,
    validationRegex,
    disabled,
    tagDisplayProp,
    inputValue,
    onChangeInput,
    ...other
  } = props;
  const _getTagDisplayValueHook = tagInner => {
    if (tagDisplayProp) {
      return tagInner[tagDisplayProp];
    }

    return tagInner;
  };

  const _makeTagHook = tagInner => {
    if (tagDisplayProp) {
      return {
        [tagDisplayProp]: tagInner,
      };
    }

    return tagInner;
  };

  const _removeTagHook = indexInner => {
    const valueInner = value.concat([]);
    if (indexInner > -1 && indexInner < valueInner.length) {
      const changed = valueInner.splice(indexInner, 1);
      onChange(valueInner, changed, [indexInner]);
    }
  };

  const _clearInputHook = () => {
    if (hasControlledInputHook()) {
      onChangeInput("");
    } else {
      setTagState("");
    }
  };

  const _tagHook = () => {
    if (hasControlledInputHook()) {
      return inputValue;
    }

    return tagState;
  };

  const _addTagsHook = tagsInner => {
    const { onValidationReject } = props;

    if (onlyUnique) {
      tagsInner = uniq(tagsInner);
      tagsInner = tagsInner.filter(tag =>
        value.every(
          currentTag => _getTagDisplayValueHook(currentTag) !== _getTagDisplayValueHook(tag)
        )
      );
    }

    const rejectedTags = tagsInner.filter(tag => !_validateHook(_getTagDisplayValueHook(tag)));
    tagsInner = tagsInner.filter(tag => _validateHook(_getTagDisplayValueHook(tag)));
    tagsInner = tagsInner.filter(tag => {
      const tagDisplayValueInner = _getTagDisplayValueHook(tag);
      if (typeof tagDisplayValueInner.trim === "function") {
        return tagDisplayValueInner.trim().length > 0;
      }
      return tagDisplayValueInner;
    });

    if (maxTags >= 0) {
      const remainingLimitInner = Math.max(maxTags - value.length, 0);
      tagsInner = tagsInner.slice(0, remainingLimitInner);
    }

    if (onValidationReject && rejectedTags.length > 0) {
      onValidationReject(rejectedTags);
    }

    if (tagsInner.length > 0) {
      const newValueInner = value.concat(tagsInner);
      const indexesInner = [];
      for (let i = 0; i < tagsInner.length; i++) {
        indexesInner.push(value.length + i);
      }
      onChange(newValueInner, tagsInner, indexesInner);
      _clearInputHook();
      return true;
    }

    if (rejectedTags.length > 0) {
      return false;
    }

    _clearInputHook();
    return false;
  };

  const _validateHook = tagInner => {
    return validate(tagInner) && validationRegex.test(tagInner);
  };

  const _shouldPreventDefaultEventOnAddHook = (addedInner, emptyInner, keyCodeInner) => {
    if (addedInner) {
      return true;
    }

    if (keyCodeInner === 13) {
      return props.preventSubmit || (!props.preventSubmit && !emptyInner);
    }

    return false;
  };

  const focusHook = () => {
    if (inputElementRef.current && typeof inputElementRef.current.focus === "function") {
      inputElementRef.current.focus();
    }

    handleOnFocusHook();
  };

  const blurHook = () => {
    if (inputElementRef.current && typeof inputElementRef.current.blur === "function") {
      inputElementRef.current.blur();
    }

    handleOnBlurHook();
  };

  const acceptHook = () => {
    let tagInner = _tagHook();

    if (tagInner !== "") {
      tagInner = _makeTagHook(tagInner);
      return _addTagsHook([tagInner]);
    }

    return false;
  };

  const addTagHook = tagInner => {
    return _addTagsHook([tagInner]);
  };

  const clearInputHook = () => {
    _clearInputHook();
  };

  const handlePasteHook = e => {
    if (!addOnPaste) {
      return;
    }

    e.preventDefault();

    const dataInner = getClipboardData(e);
    const tagsInner = pasteSplit(dataInner).map(tagInner => _makeTagHook(tagInner));

    _addTagsHook(tagsInner);
  };

  const handleKeyDownHook = e => {
    if (e.defaultPrevented) {
      return;
    }

    const tagInner = _tagHook();
    const emptyInner = tagInner === "";
    const keyCodeInner = e.keyCode;
    const keyInner = e.key;
    const addInner = addKeys.indexOf(keyCodeInner) !== -1 || addKeys.indexOf(keyInner) !== -1;
    const removeInner =
      removeKeys.indexOf(keyCodeInner) !== -1 || removeKeys.indexOf(keyInner) !== -1;

    if (addInner) {
      const addedInner = acceptHook();
      if (_shouldPreventDefaultEventOnAddHook(addedInner, emptyInner, keyCodeInner)) {
        e.preventDefault();
      }
    }

    if (removeInner && value.length > 0 && emptyInner) {
      e.preventDefault();
      _removeTagHook(value.length - 1);
    }
  };

  const handleClickHook = e => {
    if (e.target === divElementRef.current) {
      focusHook();
    }
  };

  const handleChangeHook = e => {
    const { onChange } = props.inputProps;
    const tagInner = e.target.value;

    if (onChange) {
      onChange(e);
    }

    if (hasControlledInputHook()) {
      onChangeInput(tagInner);
    } else {
      setTagState(tagInner);
    }
  };

  const handleOnFocusHook = e => {
    const { onFocus } = props.inputProps;

    if (onFocus) {
      onFocus(e);
    }

    setIsFocusedState(true);
  };

  const handleOnBlurHook = e => {
    const { onBlur } = props.inputProps;

    setIsFocusedState(false);

    if (e == null) {
      return;
    }

    if (onBlur) {
      onBlur(e);
    }

    if (addOnBlur) {
      const tagInner = _makeTagHook(e.target.value);
      _addTagsHook([tagInner]);
    }
  };

  const handleRemoveHook = tagInner => {
    _removeTagHook(tagInner);
  };

  const inputPropsHook = () => {
    // eslint-disable-next-line
    let { onChange, onFocus, onBlur, ...otherInputProps } = props.inputProps;

    const propsInner = {
      ...defaultInputProps,
      ...otherInputProps,
    };

    if (disabled) {
      propsInner.disabled = true;
    }

    return propsInner;
  };

  const inputValueHook = propsInner => {
    return propsInner.currentValue || propsInner.inputValue || "";
  };

  const hasControlledInputHook = () => {
    return typeof onChangeInput === "function" && typeof inputValue === "string";
  };

  let divClassName = className;
  if (isFocusedState) {
    divClassName = `${className} ${focusedClassName}`;
  }

  const tagComponents = value.map((tag, index) => {
    return renderTag({
      key: index,
      tag,
      onRemove: handleRemoveHook,
      disabled,
      getTagDisplayValue: _getTagDisplayValueHook,
      ...tagProps,
    });
  });

  const inputComponent = renderInput({
    ref: inputElementRef,
    value: _tagHook(),
    onPaste: handlePasteHook,
    onKeyDown: handleKeyDownHook,
    onChange: handleChangeHook,
    onFocus: handleOnFocusHook,
    onBlur: handleOnBlurHook,
    addTag: addTagHook,
    ...inputPropsHook(),
  });
  // useImperativeHandle(ref, () => ({
  //   _getDivElementRef: divElementRef.current,
  //   _getInputElementRef: inputElementRef.current,
  //   props: props,
  //   _getTagState: tagState,

  //   _getTagDisplayValue: tagInner => {
  //     return _getTagDisplayValueHook(tagInner);
  //   },

  //   _makeTag: tagInner => {
  //     return _makeTagHook(tagInner);
  //   },

  //   _removeTag: indexInner => {
  //     _removeTagHook(indexInner);
  //   },

  //   _clearInput: () => {
  //     _clearInputHook();
  //   },

  //   _tag: () => {
  //     return _tagHook();
  //   },

  //   _addTags: tagsInner => {
  //     return _addTagsHook(tagsInner);
  //   },

  //   _validate: tagInner => {
  //     return _validateHook(tagInner);
  //   },

  //   _shouldPreventDefaultEventOnAdd: (
  //     addedInner,
  //     emptyInner,
  //     keyCodeInner,
  //   ) => {
  //     return _shouldPreventDefaultEventOnAddHook(
  //       addedInner,
  //       emptyInner,
  //       keyCodeInner,
  //     );
  //   },

  //   focus: () => {
  //     focusHook();
  //   },

  //   blur: () => {
  //     blurHook();
  //   },

  //   accept: () => {
  //     return acceptHook();
  //   },

  //   addTag: tagInner => {
  //     return addTagHook(tagInner);
  //   },

  //   clearInput: () => {
  //     clearInputHook();
  //   },

  //   handlePaste: e => {
  //     handlePasteHook(e);
  //   },

  //   handleKeyDown: e => {
  //     handleKeyDownHook(e);
  //   },

  //   handleClick: e => {
  //     handleClickHook(e);
  //   },

  //   handleChange: e => {
  //     handleChangeHook(e);
  //   },

  //   handleOnFocus: e => {
  //     handleOnFocusHook(e);
  //   },

  //   handleOnBlur: e => {
  //     handleOnBlurHook(e);
  //   },

  //   handleRemove: tagInner => {
  //     handleRemoveHook(tagInner);
  //   },

  //   inputProps: () => {
  //     return inputPropsHook();
  //   },

  //   inputValue: propsInner => {
  //     return inputValueHook(propsInner);
  //   },

  //   hasControlledInput: () => {
  //     return hasControlledInputHook();
  //   },
  // }));
  return (
    <div ref={divElementRef} onClick={handleClickHook} className={divClassName}>
      {renderLayout(tagComponents, inputComponent)}
    </div>
  );
});

TagsInput.defaultProps = {
  className: "react-tagsinput",
  focusedClassName: "react-tagsinput--focused",
  addKeys: [9, 13],
  addOnBlur: false,
  addOnPaste: false,
  inputProps: {},
  removeKeys: [8],
  renderInput: defaultRenderInput,
  renderTag: defaultRenderTag,
  renderLayout: defaultRenderLayout,
  pasteSplit: defaultPasteSplit,
  tagProps: {
    className: "react-tagsinput-tag",
    classNameRemove: "react-tagsinput-remove",
  },
  onlyUnique: false,
  maxTags: -1,
  validate: () => true,
  validationRegex: /.*/,
  disabled: false,
  tagDisplayProp: null,
  preventSubmit: true,
};

TagsInput.propTypes = {
  focusedClassName: PropTypes.string,
  addKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  addOnBlur: PropTypes.bool,
  addOnPaste: PropTypes.bool,
  currentValue: PropTypes.string,
  inputValue: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func,
  removeKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  renderInput: PropTypes.func,
  renderTag: PropTypes.func,
  renderLayout: PropTypes.func,
  pasteSplit: PropTypes.func,
  tagProps: PropTypes.object,
  onlyUnique: PropTypes.bool,
  value: PropTypes.array.isRequired,
  maxTags: PropTypes.number,
  validate: PropTypes.func,
  validationRegex: PropTypes.instanceOf(RegExp),
  disabled: PropTypes.bool,
  tagDisplayProp: PropTypes.string,
  preventSubmit: PropTypes.bool,
};
