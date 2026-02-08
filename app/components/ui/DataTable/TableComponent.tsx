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
  render?:(row:any)=>React.ReactNode
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
          <TableRow className="">
            {columns?.map((col, index) => (
              <TableHead className={` px-5 py-2 text-sm sm:text-base capitalize font-medium ${index===columns.length-1?'text-end':''}`} key={index}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {data.length > 0 ? (
            data?.map((row, index) => (
              <TableRow key={index}>
                {columns?.map((col, index) => (
                  <TableCell className={` px-5 py-2 text-sm sm:text-base capitalize  ${index===columns.length-1?'text-end':''}`}  key={index}>{col.render?col.render(row):row[col.key]}</TableCell>
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
