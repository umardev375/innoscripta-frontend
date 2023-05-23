import moment from "moment";
export const filterFunction = (key: any, data: any) => {
  switch (key) {
    case "All":
      return data;
    case "Active":
      return data?.filter((el: any) => el.isActive);
    case "In Active":
      return data?.filter((el: any) => !el.isActive);
    case "Featured":
      return data?.filter((el: any) => el.isFeatured);
    case "Un Featured":
      return data?.filter((el: any) => !el.isFeatured);
    default:
      return data;
  }
};

export const filterChartData = (key: any, data: any) => {
  if (data?.length) {
    switch (key) {
      case "Daily":
        return data[0]?.length
          ? data[0]?.map((el: any) => [
              moment(el?.createdAt).format("lll"),
              el?.price,
            ])
          : [];
      case "Weekly":
        return data[1]?.length
          ? data[1]?.map((el: any) => [
              moment(el?.createdAt).format("lll"),
              el?.price,
            ])
          : [];
      case "Monthly":
        return data[2]?.length
          ? data[2]?.map((el: any) => [
              moment(el?.createdAt).format("lll"),
              el?.price,
            ])
          : [];
      default:
        return data;
    }
  }
};
