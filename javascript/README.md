## Invoca Javascript Style Guide
* The javascript style guide rules are defined in the [ESlint configuration file](https://github.com/Invoca/style-guide/blob/master/javascript/.eslintrc.json).
* The style guide rules that couldn't be defined in ESlint are documented below.

## Table Of Contents

* [Source Code Layout](#source-code-layout)
* [Naming](#naming)
* [Comments](#comments)
* [CoffeeScript](#coffeescript)

## Source Code Layout

No space before `:` in a hash; by default do not line up items
```js
// good
var settings = {
  version: 8,
  deviceType: 'iPhone'
};

// BAD - leading space
var settings = {
  version : 8,
  deviceType : 'iPhone'
};

// use sparingly - no leading space, but lining up the keys
// can be useful for hashes that are difficult to read but don't change often
var defaultConfig = {
  version:    8,
  deviceType: 'iPhone',
  log:        true
};
```

Put opening { on same line as the function declaration or boolean expression. This matches common JavaScript convention and most IDE's default to this behavior
```js
// good
function inlineness() {
  alert("hi");

  if (Ext.isIE) {
    alert("I'm sorry you are using that browser.");
  }
}

// BAD - new line before opening paren
function inlineness()
{
  alert("hi");

  if (Ext.isIE)
  {
    alert("I'm sorry you are using that browser.");
  }
}

// good
if (inlineIf === true) {
  // do stuff
} else {
  // do other stuff
};

// BAD
if (inlineIf === true)
{
  // do stuff
} else
{
  // do other stuff
};
```

Use spaces around operators, after commas, colons and semicolons, around `{` and before `}`. (But there is no need for spaces inside the empty hash `{}`.)
```js
// good
onClick = "function() { alert('hi'); }"
myHash = {}

// bad - no space around assignment
onClick="function() { alert('hi'); }"

// bad - no space after function args
onClick = "function(){ alert('hi'); }"

// bad - no spaces in method declaration
onClick="function() {alert('hi');}"

// bad - padding spaces next to parens
onClick = "function( ) { alert( 'hi' ); }"

// React
// When using JSX templates do not use spaces after bracket


// good
render: function() {
  return (
    <p>
      It is {this.props.date.toTimeString()}
    </p>
  );
}


// bad
render: function() {
  return (
    <p>
      It is { this.props.date.toTimeString() }
    </p>
  );
}
```


When possible (and you only need falsey), rely on `null` & `undefined` returning false by default
```js
// good
// when checking if var is not null, not undefined, and not false
if (myVar) {
  ...
}

// when checking if var is either null, undefined or false
if (!myVar) {
  ...
}

// bad
if (myVar != null && typeof myVar == undefined) {
  ...
}
```

When needing to check for `undefined` explicitly, use [underscore](http://underscorejs.org/)
```js
// good
if (_.isUndefined(myVar)) {
  ...
}

// BAD
if (typeof myVar === "undefined") {
  ...
}

// WORST: only two ==
if (typeof myVar == undefined) {
  ...
}
```

Use proper quotes `""` for valid JSON and `''` for html elements
```js
// good
json = { key: "Valid JSON" }
html = '<div class="example" id="some_id">'

// BAD
json = { key: 'invalid JSON' }
html = "<div class=\"example\" id=\"some_id\">"


Be wary of chaining methods that may return null

// good
var match = $(id).val().match(/\.([^.]+)$/);
var extension = match && match[1].toLowerCase();

// bad
var extension = $(input).val().match(/\.([^.]+)$/)[1].toLowerCase();
```

Assign variables on separate lines, as 2 statements or a combined statement (but only when all variables in the combined statement are starting as `undefined`). If in doubt, use separate lines with separate var statements
```js
// good
var isCustom = false;
var isLoading = true;

// good
var iterator;
var isLoading = true;

// okay because both are undefined
var isCustom, isLoading;

// bad
var isCustom = false,
  isLoading = true;

// bad
var isCustom = false, isLoading = true;

// bad - and confusing as to the intent (should isCustom also have been set to false?)
var isCustom, isLoading = false;
```

Prefer `||` assignment over ternary
```js
// good
var minCount = count || 0;

// bad
var minCount = count ? count : 0;
````

#### New Lines
Blank line between methods in a "class"
```js
// good
var Widget = {
  methodA: function() {

  },

  methodB: function() {

  }
}

// bad
var Widget = {
  methodA: function() {

  },
  methodB: function() {

  }
}
```

#### Switch statements
Blank line between case statements in switch

Indent `case` as deep as `switch`
```js
// good

switch(foo) {
case 'bar':
  alert("it's bar!");
  break;

case 'bar2':
  alert("it's bar2!");
  break;

default:
  alert("default!");
}

// bad

switch(foo) {
case 'bar':
  alert("it's bar!");
  break;
case 'bar2':
  alert("it's bar2!");
  break;
default:
  alert("default!");
}
```

### Naming
Follow standard JS conventions

Use camelCase with leading lower case for variable names and attributes / methods

```js
// good
var insightsColumns = [];


// bad - ruby style
var insights_columns = [];


// good
app.view("NetworkEdit", { adjustButtonState: function() { ...

// bad - don't name views with underscores, don't name methods with underscores
app.view("network_edit", {
  adjust_button_state: function() { ...

```

Use CamelCase with leading upper case for class names and Backdraft app & plugin names
```js
// good
Backdraft.app("InsightsManager", function(app) {
  app.view("NetworkIndex", { ...
```

when javascript uses class names as selectors, preface the class names with `js-`

```js
// good
var mydiv = $(".js-find-me");

// bad - no js- preface for javascript selector class
var mydiv = $(".find-me");
```

#### Promises
Prefer `async/await` over `Promise.prototype.then/catch/finally` because it's easier to write, read, debug, and test, and it's an effective way to write asynchronous code that appears synchronous.
```js
// good
async () => {
  try {
    await onSubmit(value);
    console.log("it succeeded");
  } catch(error) {
    console.log("there was an error");
  }
}

// bad
() => {
  onSubmit(value)
    .then(() => {
      console.log("it succeeded");
    })
    .catch((error) => {
      console.log("there was an error");
    })
}
```



### Comments
> Good code is its own best documentation.

-- Steve McConnell

When code can be refactored and put into better named methods / classes, we prefer that over a comment that just describes what a method does.  But comments are okay to describe an interface or a browser hack needed, etc.

### CoffeeScript
For a period we created CoffeeScript classes and have tests written in CoffeeScript, but we are not adding new CoffeeScript.

#### Source Code Layout
Use two spaces per indentation level. No hard tabs.
Coffeescript is whitespace significant, so you must be diligent about indentation!
Insert a single newline after method definitions
```js
# good
class Foo
  run: ->
    implementation()

  jump: ->
    implementation()


# BAD - no newline
class Foo
  run: ->
    implementation()
  jump: ->
    implementation()
```

Have spaces between operators in an expression
```js
# good
if x > 0
  run

# bad - no spaces
if x>0
  run


# good
foo = "bar"

# bad - no spaces
foo="bar"
```

