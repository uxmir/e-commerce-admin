import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../DataTable/Table";

interface tableColumns {
  header: string;
  key: any;
  render:(row:any)=>React.ReactNode
}
interface tableProps {
  columns: tableColumns[];
  data: any[];
}
const TableComponent: React.FC<tableProps> = ({ data, columns }) => {
  return (
    <>
      <Table>
        <TableHeader className="bg-gray-300">
          <TableRow>
            {columns?.map((col, index) => (
              <TableHead key={index}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {data.length > 0 ? (
            data?.map((row, index) => (
              <TableRow key={index}>
                {columns?.map((col, index) => (
                  <TableCell key={index}>{row[col.key]}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Data Not Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default TableComponent;
