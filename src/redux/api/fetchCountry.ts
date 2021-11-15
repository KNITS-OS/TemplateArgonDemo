import axiosInstance from "utils/axiosInstance";

interface Props {
  select: string;
  params: {
    country: string;
  };
}

const fetchCountry = async ({ select, params }: Props) => {
  const { country } = params;

  let { data } = await axiosInstance.get(`/country`, {
    params: {
      select,
      code: `eq.${country}`,
    },
  });

  return { data: data[0] };
};

export default fetchCountry;
