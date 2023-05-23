import { CSVLink } from "react-csv";
import Button from "../Components/Button";

export default function DownloadCSV({ data, headers,name }: any) {
  return data?.length ? (
    <CSVLink filename= { name} data={data} headers={headers}>
      <Button className="w-full">Export to CSV</Button>
    </CSVLink>
  ) : (
    <Button className="w-full">Export to CSV</Button>
  );
}
