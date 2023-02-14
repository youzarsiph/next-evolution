import React from "react";
import Link from "next/link";
import urls from "../../../urls";
import Props from "../../../components";
import { BaseNavbar } from "../../index";
import { Column, Grid } from "../../../components/utils";
import { Navbar, NavItem } from "../../../components/navbar";
import { Pagination, PaginationItem } from "../../../components/pagination";

interface ViewProps extends Props {
  title: string;
  description: string;
  prev?: string;
  next?: string;
}

export class View extends React.Component<ViewProps> {
  render(): React.ReactNode {
    const sections = [
      {
        title: "Contents",
        links: [
          {
            title: "Typography",
            url: urls["typography"],
            new: false,
            updated: false,
          },
          {
            title: "Images",
            url: urls["images"],
            new: false,
            updated: false,
          },
          {
            title: "Tables",
            url: urls["tables"],
            new: false,
            updated: false,
          },
        ],
      },
      {
        title: "Forms",
        links: [
          {
            title: "Overview",
            url: urls["overview"],
            new: false,
            updated: false,
          },
          {
            title: "Floating Labels",
            url: urls["floating"],
            new: false,
            updated: false,
          },
          {
            title: "Flushed Inputs",
            url: urls["flushed"],
            new: false,
            updated: false,
          },
        ],
      },
      {
        title: "Components",
        links: [
          {
            title: "Accordions",
            url: urls["accordion"],
            new: false,
            updated: false,
          },
          {
            title: "Alerts",
            url: urls["alert"],
            new: false,
            updated: false,
          },
          {
            title: "Avatars",
            url: urls["avatar"],
            new: false,
            updated: false,
          },
          {
            title: "Badges",
            url: urls["badge"],
            new: false,
            updated: false,
          },
          {
            title: "Breadcrumbs",
            url: urls["breadcrumb"],
            new: false,
            updated: false,
          },
          {
            title: "Buttons",
            url: urls["button"],
            new: false,
            updated: false,
          },
          {
            title: "Cards",
            url: urls["card"],
            new: false,
            updated: false,
          },
          {
            title: "Navbar",
            url: urls["navbar"],
            new: false,
            updated: false,
          },
          {
            title: "Pagination",
            url: urls["pagination"],
            new: false,
            updated: false,
          },
          {
            title: "Skeletons",
            url: urls["skeleton"],
            new: false,
            updated: false,
          },
          {
            title: "Spinners",
            url: urls["spinner"],
            new: false,
            updated: false,
          },
        ],
      },
    ];

    return (
      <div className={"lg:h-screen lg:overflow-hidden"}>
        <BaseNavbar fixed />

        <div className="lg:mt-16">
          <Grid cols={12}>
            <Column span={3}>
              <div className="lg:h-screen--5rem mt-16 lg:mt-0 lg:overflow-y-auto lg:border-r">
                <Navbar sidebar brand={"Docs"}>
                  {sections.map((section) => {
                    return (
                      <NavItem key={section.title}>
                        <h6 className="mb-0">{section.title}</h6>
                        <ol>
                          {section.links.map((item) => {
                            return (
                              <li key={item.title}>
                                <Link href={item.url}>{item.title}</Link>
                                {item.new ? (
                                  <span className="h-4 w-4 rounded-full bg-green-500 shadow-sm"></span>
                                ) : item.updated ? (
                                  <span className="h-4 w-4 rounded-full bg-yellow-500 shadow-sm"></span>
                                ) : undefined}
                              </li>
                            );
                          })}
                        </ol>
                      </NavItem>
                    );
                  })}
                </Navbar>
              </div>
            </Column>

            <Column span={9}>
              <div className={"lg:h-screen--5rem overflow-y-auto"}>
                <header className="bg-gradient gradient-info text-white shadow-lg">
                  <div className="mb-8 px-4 py-24 md:px-16 lg:px-32">
                    <h1 className="font-extrabold tracking-tight text-white lg:text-9xl">
                      {this.props.title}
                    </h1>

                    <p className="text-xl font-light">
                      {this.props.description}
                    </p>
                  </div>
                </header>
                <div className="p-4 lg:px-8">
                  {this.props.children}

                  <Pagination>
                    <PaginationItem>
                      <span className={"mr-4 inline-block"}>«</span>
                      <Link href={this.props.prev}>Prev</Link>
                    </PaginationItem>
                    <PaginationItem>
                      <Link href={this.props.next}>Next</Link>
                      <span className={"ml-4 inline-block"}> »</span>
                    </PaginationItem>
                  </Pagination>
                </div>
              </div>
            </Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default function Components() {
  const description = `
    Components are the building blocks of a react application. In this
    section and the following sections we are going to learn about
    components in Evolution UI
  `;

  return (
    <View
      title="Components"
      description={description}
      prev={urls["flushed"]}
      next={urls["accordion"]}
    ></View>
  );
}
