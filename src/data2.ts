import { Item } from "./types";

export default {
  introduction: {
    name: "Introduction",
    id: "introduction",
    depth: 0,
    children: ["introduction--page"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "introduction--page": {
    id: "introduction--page",
    kind: "Introduction",
    name: "Page",
    story: "Page",
    args: {},
    initialArgs: {},
    depth: 1,
    parent: "introduction",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "mdx-embed": {
    name: "mdx-embed",
    id: "mdx-embed",
    depth: 0,
    children: ["mdx-embed--page"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "mdx-embed--page": {
    id: "mdx-embed--page",
    kind: "mdx-embed",
    name: "Page",
    story: "Page",
    args: {},
    initialArgs: {},
    depth: 1,
    parent: "mdx-embed",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "gatsby-plugin": {
    name: "gatsby-plugin",
    id: "gatsby-plugin",
    depth: 0,
    children: ["gatsby-plugin--page"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "gatsby-plugin--page": {
    id: "gatsby-plugin--page",
    kind: "gatsby-plugin",
    name: "Page",
    story: "Page",
    args: {},
    initialArgs: {},
    depth: 1,
    parent: "gatsby-plugin",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  components: {
    name: "Components",
    id: "components",
    depth: 0,
    children: [
      "components-airtable",
      "components-buzzprout",
      "components-cinnamon",
      "components-codepen",
      "components-codesandbox",
      "components-egghead",
      "components-flickr",
      "components-gist",
      "components-instagram",
      "components-lbry",
      "components-pinterest",
      "components-simplecast",
      "components-soundcloud",
      "components-spotify",
      "components-strava",
      "components-tiktok",
      "components-twitch",
      "components-twitter",
      "components-vimeo",
      "components-wikipedia",
      "components-youtube"
    ],
    isComponent: false,
    isLeaf: false,
    isRoot: true
  },
  "components-airtable": {
    name: "Airtable",
    id: "components-airtable",
    parent: "components",
    depth: 1,
    children: [
      "components-airtable-airtablebase",
      "components-airtable-airtableform"
    ],
    isComponent: false,
    isLeaf: false,
    isRoot: false
  },
  "components-airtable-airtablebase": {
    name: "AirtableBase",
    id: "components-airtable-airtablebase",
    parent: "components-airtable",
    depth: 2,
    children: [
      "components-airtable-airtablebase--usage",
      "components-airtable-airtablebase--controls",
      "components-airtable-airtablebase--layout",
      "components-airtable-airtablebase--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-airtable-airtablebase--usage": {
    id: "components-airtable-airtablebase--usage",
    kind: "Components/Airtable/AirtableBase",
    name: "usage",
    story: "usage",
    args: {
      viewControls: "on"
    },
    initialArgs: {
      viewControls: "on"
    },
    depth: 3,
    parent: "components-airtable-airtablebase",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-airtable-airtablebase--controls": {
    id: "components-airtable-airtablebase--controls",
    kind: "Components/Airtable/AirtableBase",
    name: "controls",
    story: "controls",
    args: {
      viewControls: "on"
    },
    initialArgs: {
      viewControls: "on"
    },
    depth: 3,
    parent: "components-airtable-airtablebase",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-airtable-airtablebase--layout": {
    id: "components-airtable-airtablebase--layout",
    kind: "Components/Airtable/AirtableBase",
    name: "layout",
    story: "layout",
    args: {
      viewControls: "on"
    },
    initialArgs: {
      viewControls: "on"
    },
    depth: 3,
    parent: "components-airtable-airtablebase",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-airtable-airtablebase--help": {
    id: "components-airtable-airtablebase--help",
    kind: "Components/Airtable/AirtableBase",
    name: "help",
    story: "help",
    args: {
      viewControls: "on"
    },
    initialArgs: {
      viewControls: "on"
    },
    depth: 3,
    parent: "components-airtable-airtablebase",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-airtable-airtableform": {
    name: "AirtableForm",
    id: "components-airtable-airtableform",
    parent: "components-airtable",
    depth: 2,
    children: [
      "components-airtable-airtableform--usage",
      "components-airtable-airtableform--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-airtable-airtableform--usage": {
    id: "components-airtable-airtableform--usage",
    kind: "Components/Airtable/AirtableForm",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 3,
    parent: "components-airtable-airtableform",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-airtable-airtableform--help": {
    id: "components-airtable-airtableform--help",
    kind: "Components/Airtable/AirtableForm",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 3,
    parent: "components-airtable-airtableform",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-buzzprout": {
    name: "Buzzprout",
    id: "components-buzzprout",
    parent: "components",
    depth: 1,
    children: ["components-buzzprout--usage", "components-buzzprout--help"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-buzzprout--usage": {
    id: "components-buzzprout--usage",
    kind: "Components/Buzzprout",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-buzzprout",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-buzzprout--help": {
    id: "components-buzzprout--help",
    kind: "Components/Buzzprout",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-buzzprout",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-cinnamon": {
    name: "Cinnamon",
    id: "components-cinnamon",
    parent: "components",
    depth: 1,
    children: ["components-cinnamon--usage", "components-cinnamon--help"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-cinnamon--usage": {
    id: "components-cinnamon--usage",
    kind: "Components/Cinnamon",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-cinnamon",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-cinnamon--help": {
    id: "components-cinnamon--help",
    kind: "Components/Cinnamon",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-cinnamon",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-codepen": {
    name: "CodePen",
    id: "components-codepen",
    parent: "components",
    depth: 1,
    children: [
      "components-codepen--usage",
      "components-codepen--tabs",
      "components-codepen--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-codepen--usage": {
    id: "components-codepen--usage",
    kind: "Components/CodePen",
    name: "usage",
    story: "usage",
    args: {
      height: 500,
      tabs: "result",
      theme: "default"
    },
    initialArgs: {
      height: 500,
      tabs: "result",
      theme: "default"
    },
    depth: 2,
    parent: "components-codepen",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-codepen--tabs": {
    id: "components-codepen--tabs",
    kind: "Components/CodePen",
    name: "tabs",
    story: "tabs",
    args: {
      height: 500,
      tabs: "result",
      theme: "default"
    },
    initialArgs: {
      height: 500,
      tabs: "result",
      theme: "default"
    },
    depth: 2,
    parent: "components-codepen",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-codepen--help": {
    id: "components-codepen--help",
    kind: "Components/CodePen",
    name: "help",
    story: "help",
    args: {
      height: 500,
      tabs: "result",
      theme: "default"
    },
    initialArgs: {
      height: 500,
      tabs: "result",
      theme: "default"
    },
    depth: 2,
    parent: "components-codepen",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-codesandbox": {
    name: "CodeSandbox",
    id: "components-codesandbox",
    parent: "components",
    depth: 1,
    children: ["components-codesandbox--usage", "components-codesandbox--help"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-codesandbox--usage": {
    id: "components-codesandbox--usage",
    kind: "Components/CodeSandbox",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-codesandbox",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-codesandbox--help": {
    id: "components-codesandbox--help",
    kind: "Components/CodeSandbox",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-codesandbox",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-egghead": {
    name: "Egghead",
    id: "components-egghead",
    parent: "components",
    depth: 1,
    children: ["components-egghead-eggheadlesson"],
    isComponent: false,
    isLeaf: false,
    isRoot: false
  },
  "components-egghead-eggheadlesson": {
    name: "EggheadLesson",
    id: "components-egghead-eggheadlesson",
    parent: "components-egghead",
    depth: 2,
    children: [
      "components-egghead-eggheadlesson--usage",
      "components-egghead-eggheadlesson--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-egghead-eggheadlesson--usage": {
    id: "components-egghead-eggheadlesson--usage",
    kind: "Components/Egghead/EggheadLesson",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 3,
    parent: "components-egghead-eggheadlesson",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-egghead-eggheadlesson--help": {
    id: "components-egghead-eggheadlesson--help",
    kind: "Components/Egghead/EggheadLesson",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 3,
    parent: "components-egghead-eggheadlesson",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-flickr": {
    name: "Flickr",
    id: "components-flickr",
    parent: "components",
    depth: 1,
    children: [
      "components-flickr--usage",
      "components-flickr--test",
      "components-flickr--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-flickr--usage": {
    id: "components-flickr--usage",
    kind: "Components/Flickr",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-flickr",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-flickr--test": {
    id: "components-flickr--test",
    kind: "Components/Flickr",
    name: "test",
    story: "test",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-flickr",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-flickr--help": {
    id: "components-flickr--help",
    kind: "Components/Flickr",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-flickr",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-gist": {
    name: "Gist",
    id: "components-gist",
    parent: "components",
    depth: 1,
    children: ["components-gist--usage", "components-gist--help"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-gist--usage": {
    id: "components-gist--usage",
    kind: "Components/Gist",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-gist",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-gist--help": {
    id: "components-gist--help",
    kind: "Components/Gist",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-gist",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-instagram": {
    name: "Instagram",
    id: "components-instagram",
    parent: "components",
    depth: 1,
    children: ["components-instagram--usage"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-instagram--usage": {
    id: "components-instagram--usage",
    kind: "Components/Instagram",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-instagram",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-lbry": {
    name: "Lbry",
    id: "components-lbry",
    parent: "components",
    depth: 1,
    children: [
      "components-lbry--usage",
      "components-lbry--tabs",
      "components-lbry--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-lbry--usage": {
    id: "components-lbry--usage",
    kind: "Components/Lbry",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-lbry",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-lbry--tabs": {
    id: "components-lbry--tabs",
    kind: "Components/Lbry",
    name: "tabs",
    story: "tabs",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-lbry",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-lbry--help": {
    id: "components-lbry--help",
    kind: "Components/Lbry",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-lbry",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-pinterest": {
    name: "Pinterest",
    id: "components-pinterest",
    parent: "components",
    depth: 1,
    children: [
      "components-pinterest-pin",
      "components-pinterest-pinterestboard",
      "components-pinterest-pinterestfollowbutton"
    ],
    isComponent: false,
    isLeaf: false,
    isRoot: false
  },
  "components-pinterest-pin": {
    name: "Pin",
    id: "components-pinterest-pin",
    parent: "components-pinterest",
    depth: 2,
    children: [
      "components-pinterest-pin--usage",
      "components-pinterest-pin--size"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-pinterest-pin--usage": {
    id: "components-pinterest-pin--usage",
    kind: "Components/Pinterest/Pin",
    name: "usage",
    story: "usage",
    args: {
      size: "small"
    },
    initialArgs: {
      size: "small"
    },
    depth: 3,
    parent: "components-pinterest-pin",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-pinterest-pin--size": {
    id: "components-pinterest-pin--size",
    kind: "Components/Pinterest/Pin",
    name: "size",
    story: "size",
    args: {
      size: "small"
    },
    initialArgs: {
      size: "small"
    },
    depth: 3,
    parent: "components-pinterest-pin",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-pinterest-pinterestboard": {
    name: "PinterestBoard",
    id: "components-pinterest-pinterestboard",
    parent: "components-pinterest",
    depth: 2,
    children: [
      "components-pinterest-pinterestboard--usage",
      "components-pinterest-pinterestboard--width",
      "components-pinterest-pinterestboard--variant"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-pinterest-pinterestboard--usage": {
    id: "components-pinterest-pinterestboard--usage",
    kind: "Components/Pinterest/PinterestBoard",
    name: "usage",
    story: "usage",
    args: {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: "board"
    },
    initialArgs: {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: "board"
    },
    depth: 3,
    parent: "components-pinterest-pinterestboard",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-pinterest-pinterestboard--width": {
    id: "components-pinterest-pinterestboard--width",
    kind: "Components/Pinterest/PinterestBoard",
    name: "width",
    story: "width",
    args: {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: "board"
    },
    initialArgs: {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: "board"
    },
    depth: 3,
    parent: "components-pinterest-pinterestboard",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-pinterest-pinterestboard--variant": {
    id: "components-pinterest-pinterestboard--variant",
    kind: "Components/Pinterest/PinterestBoard",
    name: "variant",
    story: "variant",
    args: {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: "board"
    },
    initialArgs: {
      width: 400,
      height: 250,
      imageWidth: 80,
      variant: "board"
    },
    depth: 3,
    parent: "components-pinterest-pinterestboard",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-pinterest-pinterestfollowbutton": {
    name: "PinterestFollowButton",
    id: "components-pinterest-pinterestfollowbutton",
    parent: "components-pinterest",
    depth: 2,
    children: ["components-pinterest-pinterestfollowbutton--usage"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-pinterest-pinterestfollowbutton--usage": {
    id: "components-pinterest-pinterestfollowbutton--usage",
    kind: "Components/Pinterest/PinterestFollowButton",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 3,
    parent: "components-pinterest-pinterestfollowbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-simplecast": {
    name: "Simplecast",
    id: "components-simplecast",
    parent: "components",
    depth: 1,
    children: ["components-simplecast-simplecastepisode"],
    isComponent: false,
    isLeaf: false,
    isRoot: false
  },
  "components-simplecast-simplecastepisode": {
    name: "SimplecastEpisode",
    id: "components-simplecast-simplecastepisode",
    parent: "components-simplecast",
    depth: 2,
    children: [
      "components-simplecast-simplecastepisode--usage",
      "components-simplecast-simplecastepisode--width",
      "components-simplecast-simplecastepisode--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-simplecast-simplecastepisode--usage": {
    id: "components-simplecast-simplecastepisode--usage",
    kind: "Components/Simplecast/SimplecastEpisode",
    name: "usage",
    story: "usage",
    args: {
      theme: "light"
    },
    initialArgs: {
      theme: "light"
    },
    depth: 3,
    parent: "components-simplecast-simplecastepisode",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-simplecast-simplecastepisode--width": {
    id: "components-simplecast-simplecastepisode--width",
    kind: "Components/Simplecast/SimplecastEpisode",
    name: "width",
    story: "width",
    args: {
      theme: "light"
    },
    initialArgs: {
      theme: "light"
    },
    depth: 3,
    parent: "components-simplecast-simplecastepisode",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-simplecast-simplecastepisode--help": {
    id: "components-simplecast-simplecastepisode--help",
    kind: "Components/Simplecast/SimplecastEpisode",
    name: "help",
    story: "help",
    args: {
      theme: "light"
    },
    initialArgs: {
      theme: "light"
    },
    depth: 3,
    parent: "components-simplecast-simplecastepisode",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-soundcloud": {
    name: "SoundCloud",
    id: "components-soundcloud",
    parent: "components",
    depth: 1,
    children: [
      "components-soundcloud--usage",
      "components-soundcloud--color",
      "components-soundcloud--visual",
      "components-soundcloud--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-soundcloud--usage": {
    id: "components-soundcloud--usage",
    kind: "Components/SoundCloud",
    name: "usage",
    story: "usage",
    args: {
      width: "100%",
      height: "auto"
    },
    initialArgs: {
      width: "100%",
      height: "auto"
    },
    depth: 2,
    parent: "components-soundcloud",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-soundcloud--color": {
    id: "components-soundcloud--color",
    kind: "Components/SoundCloud",
    name: "color",
    story: "color",
    args: {
      width: "100%",
      height: "auto"
    },
    initialArgs: {
      width: "100%",
      height: "auto"
    },
    depth: 2,
    parent: "components-soundcloud",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-soundcloud--visual": {
    id: "components-soundcloud--visual",
    kind: "Components/SoundCloud",
    name: "visual",
    story: "visual",
    args: {
      width: "100%",
      height: "auto"
    },
    initialArgs: {
      width: "100%",
      height: "auto"
    },
    depth: 2,
    parent: "components-soundcloud",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-soundcloud--help": {
    id: "components-soundcloud--help",
    kind: "Components/SoundCloud",
    name: "help",
    story: "help",
    args: {
      width: "100%",
      height: "auto"
    },
    initialArgs: {
      width: "100%",
      height: "auto"
    },
    depth: 2,
    parent: "components-soundcloud",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-spotify": {
    name: "Spotify",
    id: "components-spotify",
    parent: "components",
    depth: 1,
    children: [
      "components-spotify--usage",
      "components-spotify--width",
      "components-spotify--height",
      "components-spotify--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-spotify--usage": {
    id: "components-spotify--usage",
    kind: "Components/Spotify",
    name: "usage",
    story: "usage",
    args: {
      width: 320,
      height: 380
    },
    initialArgs: {
      width: 320,
      height: 380
    },
    depth: 2,
    parent: "components-spotify",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-spotify--width": {
    id: "components-spotify--width",
    kind: "Components/Spotify",
    name: "width",
    story: "width",
    args: {
      width: 320,
      height: 380
    },
    initialArgs: {
      width: 320,
      height: 380
    },
    depth: 2,
    parent: "components-spotify",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-spotify--height": {
    id: "components-spotify--height",
    kind: "Components/Spotify",
    name: "height",
    story: "height",
    args: {
      width: 320,
      height: 380
    },
    initialArgs: {
      width: 320,
      height: 380
    },
    depth: 2,
    parent: "components-spotify",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-spotify--help": {
    id: "components-spotify--help",
    kind: "Components/Spotify",
    name: "help",
    story: "help",
    args: {
      width: 320,
      height: 380
    },
    initialArgs: {
      width: 320,
      height: 380
    },
    depth: 2,
    parent: "components-spotify",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-strava": {
    name: "Strava",
    id: "components-strava",
    parent: "components",
    depth: 1,
    children: ["components-strava--usage", "components-strava--help"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-strava--usage": {
    id: "components-strava--usage",
    kind: "Components/Strava",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-strava",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-strava--help": {
    id: "components-strava--help",
    kind: "Components/Strava",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-strava",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-tiktok": {
    name: "TikTok",
    id: "components-tiktok",
    parent: "components",
    depth: 1,
    children: ["components-tiktok--usage", "components-tiktok--help"],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-tiktok--usage": {
    id: "components-tiktok--usage",
    kind: "Components/TikTok",
    name: "usage",
    story: "usage",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-tiktok",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-tiktok--help": {
    id: "components-tiktok--help",
    kind: "Components/TikTok",
    name: "help",
    story: "help",
    args: {},
    initialArgs: {},
    depth: 2,
    parent: "components-tiktok",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitch": {
    name: "Twitch",
    id: "components-twitch",
    parent: "components",
    depth: 1,
    children: [
      "components-twitch--usage",
      "components-twitch--skip-to",
      "components-twitch--channel",
      "components-twitch--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitch--usage": {
    id: "components-twitch--usage",
    kind: "Components/Twitch",
    name: "usage",
    story: "usage",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-twitch",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitch--skip-to": {
    id: "components-twitch--skip-to",
    kind: "Components/Twitch",
    name: "skipTo",
    story: "skipTo",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-twitch",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitch--channel": {
    id: "components-twitch--channel",
    kind: "Components/Twitch",
    name: "channel",
    story: "channel",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-twitch",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitch--help": {
    id: "components-twitch--help",
    kind: "Components/Twitch",
    name: "help",
    story: "help",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-twitch",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter": {
    name: "Twitter",
    id: "components-twitter",
    parent: "components",
    depth: 1,
    children: [
      "components-twitter-tweet",
      "components-twitter-twitterfollowbutton",
      "components-twitter-twitterhashtagbutton",
      "components-twitter-twitterlist",
      "components-twitter-twittermentionbutton",
      "components-twitter-twittertimeline"
    ],
    isComponent: false,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-tweet": {
    name: "Tweet",
    id: "components-twitter-tweet",
    parent: "components-twitter",
    depth: 2,
    children: [
      "components-twitter-tweet--usage",
      "components-twitter-tweet--theme",
      "components-twitter-tweet--align",
      "components-twitter-tweet--hide-conversation"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-tweet--usage": {
    id: "components-twitter-tweet--usage",
    kind: "Components/Twitter/Tweet",
    name: "usage",
    story: "usage",
    args: {
      theme: "light",
      align: "left"
    },
    initialArgs: {
      theme: "light",
      align: "left"
    },
    depth: 3,
    parent: "components-twitter-tweet",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-tweet--theme": {
    id: "components-twitter-tweet--theme",
    kind: "Components/Twitter/Tweet",
    name: "theme",
    story: "theme",
    args: {
      theme: "light",
      align: "left"
    },
    initialArgs: {
      theme: "light",
      align: "left"
    },
    depth: 3,
    parent: "components-twitter-tweet",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-tweet--align": {
    id: "components-twitter-tweet--align",
    kind: "Components/Twitter/Tweet",
    name: "align",
    story: "align",
    args: {
      theme: "light",
      align: "left"
    },
    initialArgs: {
      theme: "light",
      align: "left"
    },
    depth: 3,
    parent: "components-twitter-tweet",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-tweet--hide-conversation": {
    id: "components-twitter-tweet--hide-conversation",
    kind: "Components/Twitter/Tweet",
    name: "hide-conversation",
    story: "hide-conversation",
    args: {
      theme: "light",
      align: "left"
    },
    initialArgs: {
      theme: "light",
      align: "left"
    },
    depth: 3,
    parent: "components-twitter-tweet",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterfollowbutton": {
    name: "TwitterFollowButton",
    id: "components-twitter-twitterfollowbutton",
    parent: "components-twitter",
    depth: 2,
    children: [
      "components-twitter-twitterfollowbutton--usage",
      "components-twitter-twitterfollowbutton--show-followers",
      "components-twitter-twitterfollowbutton--show-username",
      "components-twitter-twitterfollowbutton--size"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-twitterfollowbutton--usage": {
    id: "components-twitter-twitterfollowbutton--usage",
    kind: "Components/Twitter/TwitterFollowButton",
    name: "usage",
    story: "usage",
    args: {
      showUsername: true,
      size: "small"
    },
    initialArgs: {
      showUsername: true,
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twitterfollowbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterfollowbutton--show-followers": {
    id: "components-twitter-twitterfollowbutton--show-followers",
    kind: "Components/Twitter/TwitterFollowButton",
    name: "show-followers",
    story: "show-followers",
    args: {
      showUsername: true,
      size: "small"
    },
    initialArgs: {
      showUsername: true,
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twitterfollowbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterfollowbutton--show-username": {
    id: "components-twitter-twitterfollowbutton--show-username",
    kind: "Components/Twitter/TwitterFollowButton",
    name: "show-username",
    story: "show-username",
    args: {
      showUsername: true,
      size: "small"
    },
    initialArgs: {
      showUsername: true,
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twitterfollowbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterfollowbutton--size": {
    id: "components-twitter-twitterfollowbutton--size",
    kind: "Components/Twitter/TwitterFollowButton",
    name: "size",
    story: "size",
    args: {
      showUsername: true,
      size: "small"
    },
    initialArgs: {
      showUsername: true,
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twitterfollowbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterhashtagbutton": {
    name: "TwitterHashtagButton",
    id: "components-twitter-twitterhashtagbutton",
    parent: "components-twitter",
    depth: 2,
    children: [
      "components-twitter-twitterhashtagbutton--usage",
      "components-twitter-twitterhashtagbutton--size"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-twitterhashtagbutton--usage": {
    id: "components-twitter-twitterhashtagbutton--usage",
    kind: "Components/Twitter/TwitterHashtagButton",
    name: "usage",
    story: "usage",
    args: {
      size: "small"
    },
    initialArgs: {
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twitterhashtagbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterhashtagbutton--size": {
    id: "components-twitter-twitterhashtagbutton--size",
    kind: "Components/Twitter/TwitterHashtagButton",
    name: "size",
    story: "size",
    args: {
      size: "small"
    },
    initialArgs: {
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twitterhashtagbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterlist": {
    name: "TwitterList",
    id: "components-twitter-twitterlist",
    parent: "components-twitter",
    depth: 2,
    children: [
      "components-twitter-twitterlist--usage",
      "components-twitter-twitterlist--width",
      "components-twitter-twitterlist--theme"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-twitterlist--usage": {
    id: "components-twitter-twitterlist--usage",
    kind: "Components/Twitter/TwitterList",
    name: "usage",
    story: "usage",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twitterlist",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterlist--width": {
    id: "components-twitter-twitterlist--width",
    kind: "Components/Twitter/TwitterList",
    name: "width",
    story: "width",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twitterlist",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twitterlist--theme": {
    id: "components-twitter-twitterlist--theme",
    kind: "Components/Twitter/TwitterList",
    name: "theme",
    story: "theme",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twitterlist",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twittermentionbutton": {
    name: "TwitterMentionButton",
    id: "components-twitter-twittermentionbutton",
    parent: "components-twitter",
    depth: 2,
    children: [
      "components-twitter-twittermentionbutton--usage",
      "components-twitter-twittermentionbutton--size"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-twittermentionbutton--usage": {
    id: "components-twitter-twittermentionbutton--usage",
    kind: "Components/Twitter/TwitterMentionButton",
    name: "usage",
    story: "usage",
    args: {
      size: "small"
    },
    initialArgs: {
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twittermentionbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twittermentionbutton--size": {
    id: "components-twitter-twittermentionbutton--size",
    kind: "Components/Twitter/TwitterMentionButton",
    name: "size",
    story: "size",
    args: {
      size: "small"
    },
    initialArgs: {
      size: "small"
    },
    depth: 3,
    parent: "components-twitter-twittermentionbutton",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twittertimeline": {
    name: "TwitterTimeline",
    id: "components-twitter-twittertimeline",
    parent: "components-twitter",
    depth: 2,
    children: [
      "components-twitter-twittertimeline--usage",
      "components-twitter-twittertimeline--width",
      "components-twitter-twittertimeline--theme",
      "components-twitter-twittertimeline--show-likes"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-twitter-twittertimeline--usage": {
    id: "components-twitter-twittertimeline--usage",
    kind: "Components/Twitter/TwitterTimeline",
    name: "usage",
    story: "usage",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twittertimeline",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twittertimeline--width": {
    id: "components-twitter-twittertimeline--width",
    kind: "Components/Twitter/TwitterTimeline",
    name: "width",
    story: "width",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twittertimeline",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twittertimeline--theme": {
    id: "components-twitter-twittertimeline--theme",
    kind: "Components/Twitter/TwitterTimeline",
    name: "theme",
    story: "theme",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twittertimeline",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-twitter-twittertimeline--show-likes": {
    id: "components-twitter-twittertimeline--show-likes",
    kind: "Components/Twitter/TwitterTimeline",
    name: "show-likes",
    story: "show-likes",
    args: {
      theme: "light",
      width: "498px"
    },
    initialArgs: {
      theme: "light",
      width: "498px"
    },
    depth: 3,
    parent: "components-twitter-twittertimeline",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-vimeo": {
    name: "Vimeo",
    id: "components-vimeo",
    parent: "components",
    depth: 1,
    children: [
      "components-vimeo--usage",
      "components-vimeo--skip-to",
      "components-vimeo--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-vimeo--usage": {
    id: "components-vimeo--usage",
    kind: "Components/Vimeo",
    name: "usage",
    story: "usage",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-vimeo",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-vimeo--skip-to": {
    id: "components-vimeo--skip-to",
    kind: "Components/Vimeo",
    name: "skipTo",
    story: "skipTo",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-vimeo",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-vimeo--help": {
    id: "components-vimeo--help",
    kind: "Components/Vimeo",
    name: "help",
    story: "help",
    args: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-vimeo",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-wikipedia": {
    name: "Wikipedia",
    id: "components-wikipedia",
    parent: "components",
    depth: 1,
    children: [
      "components-wikipedia--usage",
      "components-wikipedia--height",
      "components-wikipedia--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-wikipedia--usage": {
    id: "components-wikipedia--usage",
    kind: "Components/Wikipedia",
    name: "usage",
    story: "usage",
    args: {
      height: 600
    },
    initialArgs: {
      height: 600
    },
    depth: 2,
    parent: "components-wikipedia",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-wikipedia--height": {
    id: "components-wikipedia--height",
    kind: "Components/Wikipedia",
    name: "height",
    story: "height",
    args: {
      height: 600
    },
    initialArgs: {
      height: 600
    },
    depth: 2,
    parent: "components-wikipedia",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-wikipedia--help": {
    id: "components-wikipedia--help",
    kind: "Components/Wikipedia",
    name: "help",
    story: "help",
    args: {
      height: 600
    },
    initialArgs: {
      height: 600
    },
    depth: 2,
    parent: "components-wikipedia",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-youtube": {
    name: "YouTube",
    id: "components-youtube",
    parent: "components",
    depth: 1,
    children: [
      "components-youtube--usage",
      "components-youtube--aspect-ratio",
      "components-youtube--skip-to",
      "components-youtube--auto-play",
      "components-youtube--help"
    ],
    isComponent: true,
    isLeaf: false,
    isRoot: false
  },
  "components-youtube--usage": {
    id: "components-youtube--usage",
    kind: "Components/YouTube",
    name: "usage",
    story: "usage",
    args: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-youtube",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-youtube--aspect-ratio": {
    id: "components-youtube--aspect-ratio",
    kind: "Components/YouTube",
    name: "aspectRatio",
    story: "aspectRatio",
    args: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-youtube",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-youtube--skip-to": {
    id: "components-youtube--skip-to",
    kind: "Components/YouTube",
    name: "skipTo",
    story: "skipTo",
    args: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-youtube",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-youtube--auto-play": {
    id: "components-youtube--auto-play",
    kind: "Components/YouTube",
    name: "autoPlay",
    story: "autoPlay",
    args: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-youtube",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  },
  "components-youtube--help": {
    id: "components-youtube--help",
    kind: "Components/YouTube",
    name: "help",
    story: "help",
    args: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    initialArgs: {
      aspectRatio: "16:9",
      skipTo: "{    h: 0,    m: 0,    s: 0 }"
    },
    depth: 2,
    parent: "components-youtube",
    isLeaf: true,
    isComponent: false,
    isRoot: false
  }
} as Record<string, Item>;
