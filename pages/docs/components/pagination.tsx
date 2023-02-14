import { View } from "./index";
import urls from "../../../urls";
import { Pagination, PaginationItem } from "../../../components/pagination";

export default function PaginationPage() {
  const description = `
    Documentation and examples for showing pagination to indicate a series
    of related content exists across multiple pages.
  `;

  return (
    <View
      title="Pagination"
      description={description}
      prev={urls["navbar"]}
      next={urls["skeleton"]}
    >
      <article title="Pagination">
        <h2>Basic</h2>
        <Pagination>
          <PaginationItem>« Prev</PaginationItem>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>Next »</PaginationItem>
        </Pagination>

        <h2>Icons</h2>
        <Pagination>
          <PaginationItem>«</PaginationItem>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>»</PaginationItem>
        </Pagination>
      </article>
    </View>
  );
}
