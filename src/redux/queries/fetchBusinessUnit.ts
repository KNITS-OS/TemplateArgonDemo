import axiosInstance from "utils/axiosInstance";

interface Props {
  select: string;
  params: {
    businessUnitId: number;
  };
}

const fetchBusinessUnit = async ({ select, params }: Props) => {
  const { businessUnitId } = params;
  let { data } = await axiosInstance.get(`/businessUnits`, {
    params: {
      select,
      id: `eq.${businessUnitId}`,
    },
  });

  return { data: data[0] };
};

export default fetchBusinessUnit;
