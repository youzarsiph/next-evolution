import urls from "../../../urls";
import { View } from "../components/index";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHeaderCell,
} from "../../../components/table";

export default function tables() {
  return (
    <View
      title="Table"
      description="Documentation for using Table Components"
      prev={urls["images"]}
      next={urls["forms"]}
    >
      <article className="mb-4" title="Tables" id="tables">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell scope="col">#</TableHeaderCell>
              <TableHeaderCell scope="col">First</TableHeaderCell>
              <TableHeaderCell scope="col">Last</TableHeaderCell>
              <TableHeaderCell scope="col">Handle</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell scope="row">1</TableCell>
              <TableCell>Yousef</TableCell>
              <TableCell>Abu Shanab</TableCell>
              <TableCell>@youzarsiph</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">2</TableCell>
              <TableCell>Arthur</TableCell>
              <TableCell>Morgan</TableCell>
              <TableCell>@arthur.morgan</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row">3</TableCell>
              <TableCell span={2}>John Marion</TableCell>
              <TableCell>@john.marion</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </article>
    </View>
  );
}
