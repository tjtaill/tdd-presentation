import React from 'react';
import { render } from 'react-dom';

import {
  Deck,
  Slide,
  Heading,
  ListItem as LI,
  Text,
  List,
  CodePane,
  Table,
  TableHeader as TH,
  TableHeaderItem as THI,
  TableItem as TI,
  TableRow as TR,
  Image,
  Quote
} from 'spectacle';

import mergeTheme from 'spectacle/lib/themes/default';

import {Context, Node} from 'react-mathjax2';

const myTheme = mergeTheme(
  {
    primary: "white",
    secondary: "black",
    tertiary: "black",
    quaternary: "black",
    quinary: "black"
  });

import javaMoney from './PhantomMoney.java';
import tsPhantomClass from './class-phantom-types.ts';
import tsPhantomIntersection from './intersection-phantom-types.ts';
import javaPhantomCallbacks from './PhantomCallbacks.java';
import tsPhantomCallbacks from './callback-returning-phantom-type.ts';
import tsPhantomState from './state-phantom-types.ts';
import javaPhantomState from './PhantomState.java';
import tsOption from './option.ts';
import javaOptional from './Optionals.java';
import tsResult from './result.ts';
import javaTry from './Try.java';
import javaSwitchExpression from './SwitchExpression.java';
import tsValueObjects from './value-objects.ts';
import javaValueObjects from './ValueObjects.java';
import marsOrbiter from './mars-climate-orbiter.jpg';

const style = {
  "border": "1px solid black;"
}

// eslint-disable-next-line react/no-multi-comp
const Presentation = () => (
  <Deck theme={myTheme}>
    <Slide>
      <Heading size={4}>Making Local API Harder to Misuse</Heading>
        <List>
          <LI>APIs should be easy to use and "hard to misuse"</LI>
          <LI>It should be easy to do simple things</LI>
          <LI>possible to do complex things</LI>
          <LI>"impossible, or at least difficult, to do wrong things"</LI>
        </List>
        <Text>Joshua Bloch</Text>
    </Slide>
    <Slide>
      <Heading size={4}>Type Systems</Heading>
      <List>
        <LI>Are a key tool to making API hard to misuse.</LI>
        <LI>They act as a constraint language greatly reducing the state space of legal programs.</LI>
        <LI>These techniques fall under the label Type Driven Development</LI>
        <LI>Making Illegal States Unrepresentable</LI>
      </List>
    </Slide>
    <Slide>
        <Heading size={4}>How Many Possible Javascript Literal Assignment?</Heading>
        <CodePane textSize={36} lang="javascript" source={`let value = ?;`}/>
    </Slide>
    <Slide>
      <Heading size={4}>How Many Possible Typescript Literal Assignment?</Heading>
      <CodePane textSize={36} lang="typescript" source={`let value: boolean = ?;`}/>
    </Slide>
    <Slide>
      <Context input="tex">
        <Table style={style}>
          <TH style={style}>
            <THI style={style}>Type</THI><THI style={style}>Literals</THI>
          </TH>
          <TR style={style}>
            <TI style={style}>boolean</TI><TI style={style}>2</TI>
          </TR>
          <TR style={style}>
            <TI style={style}>number</TI><TI style={style}><Node inline>{"2^{54}"}</Node></TI>
          </TR>
          <TR style={style}>
            <TI style={style}>string</TI><TI style={style}><Node inline>{"(2^{53}-1)*95"}</Node></TI>
          </TR>
          <TR style={style}>
            <TI style={style}>array</TI><TI style={style}><Node iniline>{"(2^{32}-1)*\\xi"}</Node></TI>
          </TR>
          <TR style={style}>
            <TI style={style}>object</TI><TI style={style}><Node>{"<(2^{32}-1)*\\xi"}</Node></TI>
          </TR>
        </Table>
      </Context>
    </Slide>
    <Slide>
      <Heading size={4}>Java Phantom Typing Money</Heading>
      <CodePane textSize={18} lang="java" source={javaMoney}/>
    </Slide>
    <Slide>
      <Heading size={4}>Showing Relevance</Heading>
      <Context input="tex">
        <List>
          <LI texSize={12}><Node inline>{`\\binom{n}{k} = \\frac{n!}{k!(n - k)!}`}</Node></LI>
          <LI><Node inline>{`\\binom{n+k-1}{k} = \\frac{n+k-1!}{k!(n-1)!}`}</Node></LI>
          <LI>If we have 180 currencies in the world</LI>
          <LI><Node inline>{`\\binom{180+2-1}{2} = \\frac{181!}{2!(179)!} = 2915910`}</Node></LI>
        </List>
      </Context>
    </Slide>
    <Slide>
      <Heading size={4}>Typing Stragtegies</Heading>
      <Table style={style}>
        <TH style={style}>
          <THI style={style}>Typing</THI><THI style={style}>Description</THI><THI style={style}e>Languages</THI>
        </TH>
        <TR style={style}>
          <TI sstyle={style}>Nominal</TI><TI style={style}>Typing based on name not data shape, better error messages</TI><TI style={style}>Java</TI>
        </TR>
        <TR style>
          <TI style={style}>Structural</TI><TI style={style}>Typing based on shape of data, more powerful and flexible, bad error messages</TI><TI style={style}>Typescript</TI>
        </TR>
        <TR style={style}>
          <TI style={style}>Duck</TI><TI style={style}>Flexible like Structural typing but no compile time safety doesn't suffer from bad error messages</TI><TI style={style}>Javascript</TI>
        </TR>
      </Table>
    </Slide>
    <Slide>
      <Heading size={6}>Typescript Phantom Typing using Class Branding</Heading>
      <CodePane textSize={16} lang="ts" source={tsPhantomClass}/>
    </Slide>
    <Slide>
      <Heading size={6}>Typescript Phantom Typing using Intersection Types Branding</Heading>
      <CodePane textSize={16} lang="ts" source={tsPhantomIntersection}/>
    </Slide>
    <Slide>
      <Heading size={4}>More Motivation</Heading>
      <Image src={marsOrbiter}/>
    </Slide>
    <Slide>
      <Heading size={4}>Unit Libraries</Heading>
      <Table style={style}>
        <TH style={style}>
          <THI style={style}>Language</THI><THI style={style}>Liraries</THI>
        </TH>
        <TR style={style}>
          <TI style={style}>C++</TI><TI style={style}>boost units</TI>
        </TR>
        <TR style={style}>
          <TI style={style}>Java</TI><TI style={style}>jscience, units of measure</TI>
        </TR>
        <TR style={style}>
          <TI style={style}>Typescript</TI><TI style={style}>safe-units</TI>
        </TR>
      </Table>
    </Slide>
    <Slide>
      <Heading size={4}>Java Phantom Callbacks</Heading>
      <CodePane textSize={16} lang="java" source={javaPhantomCallbacks}/>
    </Slide>
    <Slide>
      <Heading size={4}>Typescript Phantom Callbacks</Heading>
      <CodePane textSize={18} lang="ts" source={tsPhantomCallbacks}/>
    </Slide>
    <Slide>
      <Heading size={4}>Typescript Phantom State</Heading>
      <CodePane textSize={18} lang="ts" source={tsPhantomState}/>
    </Slide>
    <Slide>
      <Heading size={6}>Java Phantom State</Heading>
      <CodePane textSize={14} lang="java" source={javaPhantomState}/>
    </Slide>
    <Slide>
      <Heading size={6}>Composition Types Sum vs Product</Heading>
      <Table style={style}>
        <TH style={style}>
          <THI style={style}>Type</THI><THI style={style}>Description</THI><THI style={style}>Examples</THI>
        </TH>
        <TR style={style}>
          <TI style={style}>Product</TI><TI style={style} textSize={12}>Composition types whose enumerated possible values are the cartesian product of all composed members</TI>
          <TI style={style}>
            <List>
              <LI textSize={12}>Typescript : Object, Tuple, Intersections, Interface, Class</LI>
              <LI etxtSize={12}>Java: Class, Map</LI>
            </List>
          </TI>
        </TR>
        <TR style={style}>
          <TI style={style}>Sum</TI><TI style={style} textSize={12}>Composition type whose enumerated possible values is the sume of all composed members</TI>
          <TI style={style}>
              <LI textSize={12}>Typescript : Unions, enum</LI>
              <LI textSize={12}>Java: Optional, Enum, Try(vavr)</LI>
          </TI>
        </TR>
      </Table>
    </Slide>
    <Slide>
      <Heading size={6}>Typescript Sum Type Option</Heading>
      <CodePane textSize={16} lang="ts" source={tsOption}/>
    </Slide>
    <Slide>
      <Heading size={4}>Java Optional Sum Type</Heading>
      <CodePane textSize={18} lang="java" source={javaOptional}/>
    </Slide>
    <Slide>
      <Heading size={4}>Typescript Sum Type Result</Heading>
      <CodePane textSize={16} lang="ts" source={tsResult}/>
    </Slide>
    <Slide>
      <Heading size={4}>Java Vavr Try Sum Type</Heading>
      <CodePane textSize={18} lang="java" source={javaTry}/>
    </Slide>
    <Slide>
      <Heading size={6}>Java 14 Switch Expressions</Heading>
      <CodePane textSize={12} lang="java" source={javaSwitchExpression}/>
    </Slide>
    <Slide>
      <Heading size={4}>Value Objects</Heading>
      <List>
        <LI>One of the building blocks of Domain Driven Design</LI>
        <LI>Small objects representing values without identity</LI>
        <LI>Immutable</LI>
        <LI>Support standard interface for serialization, equality and hashing</LI>
        <LI>Maintain their State Invariants during Runtime</LI>
        <LI>Most portable and simplest technique shown can be used with dynamically typed languages</LI>
      </List>
    </Slide>
    <Slide>
      <Heading size={4}>Typescript Value Objects</Heading>
      <CodePane textSize={18} lang="ts" source={tsValueObjects}/>
    </Slide>
    <Slide>
      <Heading size={4}>Java Value Objects</Heading>
      <CodePane textSize={18} lang="java" source={javaValueObjects}/>
    </Slide>
    <Slide>
      <Heading size={4}>Value Object Libraries</Heading>
      <table style={style}>
        <TH style={style}>
          <THI style={style}>Languages</THI><THI style={style}>Libraries</THI>
        </TH>
        <TR style={style}>
          <TI style={style}>Java</TI><TI style={style}>Lombok, Immutables</TI>
        </TR>
        <TR style={style}>
          <TI style={style}>Javascript, Typescript</TI><TI style={style}>tiny-types, dataclass</TI>
        </TR>
      </table>
    </Slide>
    <Slide>
      <Text>{`
      Making illegal states unrepresentable is all about statically proving that all runtime values (without exception)
      correspond to valid objects in the business domain. The effect of this technique on eliminating meaningless runtime states
      is astounding and cannot be overstated.

        -— John A De Goes (@jdegoes) January 28, 2019
      `}</Text>
    </Slide>
    <Slide>
      <Heading size={4}>The End</Heading>
      <List>
        <LI>Phantom Types, Sum Types and Value Objects are awesome</LI>
        <LI>Please send feedback</LI>
        <LI>Consider giving a tech talk yourself to foster a culture of learning</LI>
      </List>
    </Slide>
  </Deck>
);

render(<Presentation />, document.getElementById('root'));
