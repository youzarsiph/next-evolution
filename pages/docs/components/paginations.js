import { View } from ".";
import urls from "../../../urls";
import { Pagination, PaginationItem } from "../../../components/navigation";

export default function Paginations() {
  return (
    <View prevPage={urls["navbars"]} nextPage={urls["components"]}>
      <article className="mb-8" title="Pagination">
        <h1 className="text-gradient gradient-primary">Pagination</h1>

        <Pagination>
          <PaginationItem>« Prev</PaginationItem>
          <PaginationItem>Next »</PaginationItem>
        </Pagination>

        <Pagination justify="center">
          <PaginationItem>«</PaginationItem>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>»</PaginationItem>
        </Pagination>

        <Pagination justify="end">
          <PaginationItem>Prev</PaginationItem>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>Next</PaginationItem>
        </Pagination>
      </article>
    </View>
  );
}
