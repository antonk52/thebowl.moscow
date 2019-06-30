import Link from "next/link";
import styled from 'reshadow';
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Guests from "../components/Guests";
import Map from "../components/Map";
import Meta from "../components/Meta";
import LastYearVideo from "../components/LastYearVideo";
import WhatIsIt from "../components/WhatIsIt";
import Reglament from '../components/Reglament';
import {skaters, bmxers} from '../data';

export default () => styled`
    :global(body),
    :global(html) {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: rgb(19, 20, 19);
        font-family: circle-extra, sans-serif;
    }

    @font-face {
        font-family: "circle-extra";
        src: url("../static/font/Circe-ExtraBold.woff") format("woff"),
             url("../static/font/Circe-ExtraBold.ttf") format("ttf");
    }
`(
  <main>
    <Meta />
    <Header />
    <Intro />
    <Hero />
    <LastYearVideo />
    <WhatIsIt />
    <Guests guests={skaters} title="СКЕЙТ" />
    <div>hello Larek</div>
    <Guests guests={bmxers} title="BMX" />
    <Reglament />
    <Map />
  </main>
);
