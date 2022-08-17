import urls from "../../../urls";
import { View } from "../components";

export default function Typography() {
  return (
    <View prevPage={urls["docs"]} nextPage={urls["images"]}>
      <article title="Typography">
        <h1 className="text-gradient gradient-primary">Typography</h1>
        <p className="text-xl font-light">
          Documentation and examples for typography, including global settings,
          headings, body text, lists, and more.
        </p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>
          You can use the mark tag to <mark>highlight</mark> text.
        </p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <ins>
            This line of text is meant to be treated as an addition to the
            document.
          </ins>
        </p>
        <p>
          <u>Underlined text.</u>
        </p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p>
          <strong>This line rendered as bold text.</strong>
        </p>
        <p>
          <em>This line rendered as italicized text.</em>
        </p>

        <blockquote className="mb-4">
          <p className="italic">
            A well-known quote, contained in a blockquote element.
          </p>
          <footer>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>

        <ul className="mb-4">
          <li>This is an unorderd list.</li>
          <li>
            Nested lists:
            <ul>
              <li>The 1st item</li>
              <li>...</li>
              <li>The nth item</li>
            </ul>
          </li>
          <li>The last item in the list</li>
        </ul>

        <ol>
          <li>This is an orderd list.</li>
          <li>
            Nested lists:
            <ul>
              <li>The 1st item</li>
              <li>...</li>
              <li>The nth item</li>
            </ul>
          </li>
          <li>The last item in the list</li>
        </ol>
      </article>
    </View>
  );
}