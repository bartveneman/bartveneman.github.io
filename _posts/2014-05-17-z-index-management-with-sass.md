---
layout: post
title: Z-index management with SASS
---

<p>Large projects can suffer from complex UI components and external libraries for sliders etc. Here you are with your carefully created library and sliders are moving over modals, buttons become unresponsive to interactions because some element is placed on top of them. We need <code>z-index</code> management.</p>

<p>The idea is to go through the complete site and compile a list of elements that have/need a <code>z-index</code>. After that, set a priority for each element. An element with priority 1 should be stacked on top of an element with priority 2 and so on. Elements whose stacking order doesn't matter can have the same priority.</p>

<h2>Creating a priority list</h2>
<table>
    <thead>
        <tr>
            <th>Element</th>
            <th>Priority</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <code>.Modal</code>
            </td>
            <td>1</td>
        </tr>
        <tr>
            <td>
                <code>.Modalbackdrop</code>
            </td>
            <td>2</td>
        </tr>
    </tbody>
</table>

<p>As you can see, there's a total of 3 different priorities. We can use this to calculate the <code>z-index</code> for each element dynamically with SASS. The following function will return the apropriate <code>z-index</code> according to the priority of the element.</p>

<h2>The function</h2>
{% highlight scss %}
$num-zindex-priorities: 3;

@function calculate-z-index($priority) {
    @return $num-zindex-priorities - $priority;
}
{% endhighlight %}

<h2>Usage example</h2>
{% highlight scss %}
.Modal {
    z-index: calculate-z-index(1);
}

.Modal__Backdrop {
    z-index: calculate-z-index(2);
}

.PageHead__Nav {
    z-index: calculate-z-index(3);
}
{% endhighlight %}

<p>This will be compiled to:</p>

{% highlight css %}
.Modal {
    z-index: 2;
}

.Modal__Backdrop {
    z-index: 1;
}

.PageHead__Nav {
    z-index: 0;
}
{% endhighlight %}

<p><em>Of course this is a hack, but sometimes we need hacks.</em></p>
