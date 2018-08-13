Steps to reproduce:
1. Run `node index.js > index.html`
2. Generated file will be (pretty printed)
```html
<div class="FelaComponent_connect(Component)__137u7ef" data-reactroot="">
    component
</div>
<style type="text/css" data-fela-rehydration="0" data-fela-type="RULE">
    .FelaComponent_connect(Component)__137u7ef{
        color:red
    }
</style>
```
3. As you can see class name `FelaComponent_connect(Component)__137u7ef` is unescaped.

Expected result:
Class name `FelaComponent_connect(Component)__137u7ef` inside style tag is escaped.

```css
.FelaComponent_connect\(Component\)__137u7ef{
    color:red
}
```

