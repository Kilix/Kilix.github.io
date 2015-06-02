---
layout: post
title:  "Article de test css"
date:   2015-06-02 15:30:00
categories: test
---

## Test lien
[Jekyll’s GitHub repo][jekyll-gh]
[kiilix](http://kilix.fr)

## Test Ruby
{% highlight ruby linenos %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to TEST.
{% endhighlight %}

## Test php
{% highlight php linenos %}
<?php
echo "Welcome to Kilix Blog";

$bool = true;

function showImg($bool)
{
if($bool){
echo 'Hello !'
}
}

showImg($bool);


?>
{% endhighlight %}

## Test title

# Test h1

## Test h2

### Test h3

#### Test h4

### List
Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

### Link & notes

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

### quote
Here is a blockquote:

As Kanye West said:

> We're living the future so
> the present is our past.

### task

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


### table

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

[^1]: Footnote text goes here.

[jekyll-gh]:   https://github.com/jekyll/jekyll

