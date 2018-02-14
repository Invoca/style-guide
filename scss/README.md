# Prelude
Welcome to the Invoca CSS Styleguide. We use SASS, so really its the SASS Styleguide. SASS is a superset of CSS and pretty rad. Before reading this, you should have a general understanding for specificity and the [SCSS](http://sass-lang.com/) syntax.

The contents of this styleguide are to be enforced and automated in the code review process by [HoundCI](https://houndci.com/)

Any adjustments to this styleguide should be captured in the [.scss-lint.yml](.scss-lint.yml) config.


## Table Of Contents

* [Syntax](#syntax)
* [Class Names](#class-names)

### Syntax
* Use soft-tabs with a two space indent.
* Put no space before and one space after `:` in property declarations.
* Put one space before `{` in rule declarations.
* Opening `{` should be on same line as selector
* Closing `}` should be on newline, at same indentation as selector
* Use hex color codes `#000` unless using rgba.
* Use `//` for comment blocks (instead of `/* */`).
* Leave a line of whitespace between style blocks

Here is good example syntax:
```css
.styleguide-format {
  border: 1px solid #0f0;
  color: #000;
  background: rgba(0,0,0,0.5);
}
 
.single-style {
  color: #fff;
}
```

### Class names
TODO: this section needs filling out further.

Use dashes to separate words
```css

.loading-indicator {
  ...
}
 
.top-heading {
  ...
}
```

Prefix plugin or component specific classes with the name of component and `--`
* This makes it easy to know in HTML what the styles are for
* Prevents colusions with global classes or other component's classes
* Easy to search in codebase if refactoring is needed or the component is removed entirely
```css
.infinite-scroll--more-results-indicator {
  ...
}
 
.infinite-scroll--table-row {
  ...
}
```

Prefix classes that are only used for jQuery to find elements with `js-`
* Avoids coupling styles with JS behavior (where you might accidentally break JS controls when refactoring or removing CSS styles)
* Easy to know at a glance in HTML why a class is there
* jQuery should not be selecting elements without a `js-` prefix
```css
<div class="js-status-message"></div>
 
<span class="js-hide-on-loading"></span>
```
