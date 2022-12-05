import urls from "../../../urls";
import { View } from "../components/index";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/table";

export default function tables() {
  return (
    <View prevPage={urls["images"]} nextPage={urls["forms"]}>
      <article className="mb-4" title="Tables" id="tables">
        <h1 className="text-gradient gradient-primary">Tables</h1>
        <p className="text-xl font-light">
          Documentation for using Table Components
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" headerCell>
                #
              </TableCell>
              <TableCell scope="col" headerCell>
                First
              </TableCell>
              <TableCell scope="col" headerCell>
                Last
              </TableCell>
              <TableCell scope="col" headerCell>
                Handle
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell scope="row" headerCell>
                1
              </TableCell>
              <TableCell>Yousef</TableCell>
              <TableCell>Abu Shanab</TableCell>
              <TableCell>@youzarsiph</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row" headerCell>
                2
              </TableCell>
              <TableCell>Arthur</TableCell>
              <TableCell>Morgan</TableCell>
              <TableCell>@argan</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope="row" headerCell>
                3
              </TableCell>
              <TableCell colSpan="2">John Marston</TableCell>
              <TableCell>@marston</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </article>
    </View>
  );
}
