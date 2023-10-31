# ethfud-com

This is the source code for <https://ethfud.com>, an educational site to help combat misinformation.



## Local Development

1. Clone the repo (or fork the repo to your account)
1. Install dependencies: `bundle install`
1. Create a feature branch off of the `dev` branch
1. Start the local server: `bundle exec jekyll serve`
1. Go to <http://localhost:4400/> to view changes

To build the site use `bundle exec jekyll build`.

Resources:

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Liquid Syntax](https://shopify.github.io/liquid/basics/introduction/)



## Creating A New Page

1. In the `/claims` folder, create a new markdown file using the claim as the filename. For example, a page about a claim that Ethereum was premined would have a page titled `ethereum-premine.md`.
  - A template can be found at `claims/_template.md`.
  - An example file can be found at `claims/_example.md`.
2. At the top of the page add the following "frontmatter". This is page metadata used when building the site.
  ```
  ---
  layout: claim
  title: 
  permalink: claims/
  validity: 
  ---
  ```
3. Fill out the frontmatter. Here's an example of what it would look like for `ethereum-premine.md`:
  ```
  ---
  layout: claim
  title: Ethereum was premined by Vitalik and the Ethereum Foundation
  permalink: claims/ethereum-premine
  validity: fud
  ---
  ```
  - layout: Keep this as `claim`, this is the template used when building the page.
  - title: The title of the page.
  - permalink: The URL path for the page you're creating. Keep the `claims/` prefix.
  - validity: The options are `true`, `falsy` (partially true/false), and `fud`.
4. Fill out the rest of the page with your content using markdown. Try to reference official sources where possible.



## Markdown Examples


# H1

```
# H1
```


## H2

```
## H2
```


### H3

```
### H3
```


#### H4

```
#### H4
```


##### H5

```
##### H5
```


###### H6

```
###### H6
```


[link](/t/test/)

```
[link](/t/test/)
[link](https://example.com)
```


**bold text**

```
**bold text**
```


*italic text*

```
*italic text*
```


__*bold and italic text*__

```
__*bold and italic text*__
```


`inline code`

```
`inline code`
```


```
code block
```

    ```
    code block
    ```


- this is an
- unordered
    - list

```
- this is an
- unordered
    - list
```


1. this is an:
    ```
    ordered list
    ```
1. continued after code block

```
1. this is an:
    ```
    ordered list
    ```
1. continued after code block
```


header 1      | header 2
--------------|--------------
row 1, col 1  | row 1, col 2
row 2, col 1  | row 2, col 2
row 3, col 1  | row 3, col 2

```
header 1      | header 2
--------------|--------------
row 1, col 1  | row 1, col 2
row 2, col 1  | row 2, col 2
row 3, col 1  | row 3, col 2
```


<details markdown="1">
  <summary>Expandable content (click to open)</summary>
  Peek a boo!

  - I
    - see
      - you
</details>

```
<details markdown="1">
  <summary>Expandable content (click to open)</summary>
  Peek a boo!

  - I
    - see
      - you
</details>
```


![](/assets/img/logo.png)

```
![](/assets/img/logo.png)
```


{:class="caption"}
this is a caption

```
{:class="caption"}
this is a caption
```
