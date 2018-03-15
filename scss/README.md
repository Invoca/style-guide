# Prelude
Welcome to the Invoca CSS Styleguide. We use SASS, so really its the SASS Styleguide. SASS is a superset of CSS and pretty rad. Before reading this, you should have a general understanding for specificity and the [SCSS](http://sass-lang.com/) syntax.

The contents of this styleguide are to be enforced and automated in the code review process by [HoundCI](https://houndci.com/)

Any adjustments to this styleguide should be captured in the [.scss-lint.yml](.scss-lint.yml) config.


## Table Of Contents

* [Syntax](#syntax)
* [Class Names](#class-names)

### Syntax

#### Spacing / structure
* Use soft-tabs with a two space indent.
* Put no space before and one space after `:` in property declarations
* Put one space before `{` in rule declarations.
* Opening `{` should be on same line as selector
* Closing `}` should be on newline, at same indentation as selector
* Each property should be on it's own line
* Leave a line of whitespace between style blocks

Good example syntax:
```css
.styleguide-format {
  border: 1px solid #0f0;
  color: $page-text-color;
  background: $page-background-color;
}
 
.single-style {
  color: $invoca-primary-color;
}
```

#### Colors / values
* Use variables for colors instead of hard coded values
* When defining variables, use hex color codes `#000` unless using rgba.

  ```
  $page-text-color: #000;
  $page-background-color: rgba(0,0,0,0.5);
  ```

* Use `0` instead of `0px` or `0rem`

#### Comments
* Use `//` for comment blocks (instead of `/* */`).


#### Selectors
* Use dashes to separate words
* Put multiple selectors (for a single declaration) on their own line

```css
.icon-warning,
.icon-error {
  padding-right: 0.5rem;
}
```

* Avoid nesting selectors beyond 3 levels deep

##### Component selectors
* Prefix plugin or component specific classes with the name of component and `--`
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
