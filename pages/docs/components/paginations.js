import { View } from ".";
import urls from "../../../urls";
import { Pagination, PaginationItem } from "../../../components/navigation";

export default function Paginations() {
  return (
    <View prevPage={urls["navbar"]} nextPage={urls["skeleton"]}>
      <article className="mb-8" title="Pagination">
        <h1 className="text-gradient gradient-primary">Pagination</h1>
        <p className="text-xl font-light">
          Documentation and examples for showing pagination to indicate a series
          of related content exists across multiple pages.
        </p>

        <h2>Basic</h2>
        <Pagination>
          <PaginationItem>« Prev</PaginationItem>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>Next »</PaginationItem>
        </Pagination>

        <h2>Working with icons</h2>
        <Pagination>
          <PaginationItem>«</PaginationItem>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>»</PaginationItem>
        </Pagination>

        <h2>Alignment</h2>
        <Pagination justify="center">
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
