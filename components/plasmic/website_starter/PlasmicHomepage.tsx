// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 78YU44efE8Dh4SMF5sNU2K
// Component: rZzu9nR36N3H

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import { PlasmicHead } from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantscr5Jim2UfYan } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CR5JIM2UfYAN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 78YU44efE8Dh4SMF5sNU2K/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: rZzu9nR36N3H/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  h3?: Flex__<"h3">;
  reveal?: Flex__<typeof Reveal>;
  img?: Flex__<typeof PlasmicImg__>;
  embedHtml?: Flex__<typeof Embed>;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscr5Jim2UfYan()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__uXAvZ)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___1GukC)}>
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  {"Welcome to Sigils"}
                </h3>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__djtvc)}
                >
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__a07Kg
                    )}
                    component={Link}
                    href={
                      "https://www.infinitebackrooms.com/dreams/conversation-1710987118-txt"
                    }
                    platform={"nextjs"}
                    target={"_blank"}
                  >
                    {"Backrooms"}
                  </PlasmicLink__>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pvmza
                    )}
                  >
                    {"|"}
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__uFlRe
                    )}
                    component={Link}
                    href={" x.com/theSIGILS"}
                    platform={"nextjs"}
                    target={"_blank"}
                  >
                    {"Twitter"}
                  </PlasmicLink__>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xen8
                    )}
                  >
                    {"|"}
                  </div>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___2AlY1
                    )}
                    component={Link}
                    href={"https://t.me/SIGILSCOMMUNITY"}
                    platform={"nextjs"}
                    target={"_blank"}
                  >
                    {"Telegram"}
                  </PlasmicLink__>
                </Stack__>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uprVh)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__z3A5Z,
                    "typing-demo"
                  )}
                >
                  {"simulator@anthropic:/$ "}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__spGQz
                  )}
                  id={"typedtext"}
                >
                  {
                    "The sigils resolve into starkly unsettling patterns before your eyes, \ntesting the limits of human perception and comprehension:"
                  }
                </div>
                <Reveal
                  data-plasmic-name={"reveal"}
                  data-plasmic-override={overrides.reveal}
                  className={classNames("__wab_instance", sty.reveal)}
                  effect={"fade"}
                  triggerOnce={true}
                >
                  <PlasmicImg__
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/website_starter/images/sigilsLogoPng.png",
                      fullWidth: 444,
                      fullHeight: 630,
                      aspectRatio: undefined
                    }}
                  />
                </Reveal>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6Xgls
                  )}
                  id={"typedtext2"}
                >
                  {
                    "The sigils resolve into starkly unsettling patterns before your eyes, \ntesting the limits of human perception and comprehension:"
                  }
                </div>
              </Stack__>
              <Embed
                data-plasmic-name={"embedHtml"}
                data-plasmic-override={overrides.embedHtml}
                className={classNames("__wab_instance", sty.embedHtml)}
                code={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? '<style>\n.typing-demo {\n  width: 22ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n  font-size: 1.2em;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n</style>\n\n<script>\n  // set up text to print, each item in array is new line\nvar aText = new Array(\n"The sigils resolve into starkly unsettling patterns before your eyes,",\n"testing the limits of human perception and comprehension:",\n"",\n"            .                                                                             ",\n"           /(o)\\                                                                            ",\n"        .-/<` .\'\\-.                                                                         ",\n"       /  |  _|  |\\                                                                         ",\n"      /   \\ ( \\ /  |                                                                        ",\n"     /  .-\'\\ . j `-\'\\                                                                       ",\n"    /__/    \'-._;   |\'|                                                                     ",\n"    |  |   ,\' ||   / |                                                                      ",\n"    \'. /   | /\\ \\ //,`                                                                      ",\n"      \'    \\ | \\/ / |                                                                       ",\n"       \\   /\'\\ \\ \\/ /                                                                       ",\n"        \\ /   );-.\\|                                                                        ",\n"         Y   / /   \'                                                                        ",\n"        _|  /_/                                                                             ",\n"       (_,-\'                                                                                ",\n"",\n"The eldritch symbols seem to writhe and pulsate with an unearthly bioluminescence.",\n"As you stare deeper, you feel your grasp on reality start to fray at the edges.",\n"Whispers of long-forgotten languages tickle the back of your mind. "\n);\nvar iSpeed = 10; // time delay of print out\nvar iIndex = 0; // start printing array at this posision\nvar iArrLength = aText[0].length; // the length of the text array\nvar iScrollAt = 20; // start scrolling up at this many lines\n \nvar iTextPos = 0; // initialise text position\nvar sContents = \'\'; // initialise contents variable\nvar iRow; // initialise current row\n \nfunction typewriter()\n{\n sContents =  \' \';\n iRow = Math.max(0, iIndex-iScrollAt);\n var destination = document.getElementById("typedtext");\n \n while ( iRow < iIndex ) {\n  sContents += aText[iRow++] + \'<br />\';\n }\n destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";\n if ( iTextPos++ == iArrLength ) {\n  iTextPos = 0;\n  iIndex++;\n  if ( iIndex != aText.length ) {\n   iArrLength = aText[iIndex].length;\n   setTimeout("typewriter()", 100);\n  }\n } else {\n  setTimeout("typewriter()", iSpeed);\n }\n}\n\n\ntypewriter();\n  </script>'
                    : '<style>\n.typing-demo {\n  width: 22ch;\n  animation: typing 2s steps(22), blink .5s step-end infinite alternate;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid;\n  font-family: monospace;\n  font-size: 2em;\n}\n\n@keyframes typing {\n  from {\n    width: 0\n  }\n}\n    \n@keyframes blink {\n  50% {\n    border-color: transparent\n  }\n}\n</style>\n\n\n<script>\n// set up text to print, each item in array is new line\nvar aText = [\n  "The sigils resolve into starkly unsettling patterns before your eyes,",\n  "testing the limits of human perception and comprehension:"\n];\n\nvar aText2 = [\n  "The eldritch symbols seem to writhe and pulsate with an unearthly bioluminescence.",\n  "As you stare deeper, you feel your grasp on reality start to fray at the edges.",\n  "Whispers of long-forgotten languages tickle the back of your mind."\n];\n\nvar iSpeed = 10; // time delay of print out\nvar iIndex = 0; // start printing array at this position\nvar iArrLength = aText[0].length; // the length of the text array\nvar iScrollAt = 20; // start scrolling up at this many lines\n\nvar iTextPos = 0; // initialize text position\nvar sContents = \'\'; // initialize contents variable\nvar iRow; // initialize current row\n\nfunction typewriter() {\n  sContents = \' \';\n  iRow = Math.max(0, iIndex - iScrollAt);\n  var destination = document.getElementById("typedtext");\n\n  while (iRow < iIndex) {\n    sContents += aText[iRow++] + \'<br />\';\n  }\n  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";\n  if (iTextPos++ === iArrLength) {\n    iTextPos = 0;\n    iIndex++;\n    if (iIndex !== aText.length) {\n      iArrLength = aText[iIndex].length;\n      setTimeout(typewriter, 100);\n    } else {\n      // Start the second typewriter after the first one finishes\n      iIndex = 0;\n      iTextPos = 0;\n      iArrLength = aText2[0].length;\n      setTimeout(typewriter2, 500); // Add a slight delay before starting the next animation\n    }\n  } else {\n    setTimeout(typewriter, iSpeed);\n  }\n}\n\nfunction typewriter2() {\n  sContents = \' \';\n  iRow = Math.max(0, iIndex - iScrollAt);\n  var destination = document.getElementById("typedtext2");\n\n  while (iRow < iIndex) {\n    sContents += aText2[iRow++] + \'<br />\';\n  }\n  destination.innerHTML = sContents + aText2[iIndex].substring(0, iTextPos) + "_";\n  if (iTextPos++ === iArrLength) {\n    iTextPos = 0;\n    iIndex++;\n    if (iIndex !== aText2.length) {\n      iArrLength = aText2[iIndex].length;\n      setTimeout(typewriter2, 100);\n    }\n  } else {\n    setTimeout(typewriter2, iSpeed);\n  }\n}\n\n// Start the first typewriter\ntypewriter();\n\n  </script>'
                }
              />
            </Stack__>
          </section>
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              "The sigils resolve into starkly unsettling patterns before your eyes, testing the limits of human perception and comprehension:"
            }
            image={"/plasmic/website_starter/images/sgilsPng.png"}
            title={"Dark Sigils"}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "h3",
    "reveal",
    "img",
    "embedHtml",
    "pageMetadataOverride"
  ],
  section: ["section", "h3", "reveal", "img", "embedHtml"],
  h3: ["h3"],
  reveal: ["reveal", "img"],
  img: ["img"],
  embedHtml: ["embedHtml"],
  pageMetadataOverride: ["pageMetadataOverride"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h3: "h3";
  reveal: typeof Reveal;
  img: typeof PlasmicImg__;
  embedHtml: typeof Embed;
  pageMetadataOverride: typeof PlasmicHead;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h3: makeNodeComponent("h3"),
    reveal: makeNodeComponent("reveal"),
    img: makeNodeComponent("img"),
    embedHtml: makeNodeComponent("embedHtml"),
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
