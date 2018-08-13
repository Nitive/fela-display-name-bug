const React = require('react')
const { createRenderer } = require('fela')
const { createComponent } = require('react-fela')
const { renderToString } = require('react-dom/server')
const { Provider } = require('react-fela')
const { renderToMarkup } = require('fela-dom')
const felaMonolithic = require('fela-monolithic').default;

function Component(props) {
    return React.createElement('div', props, 'component')
}
Component.displayName = 'connect(Component)'

const Test = createComponent(() => ({ color: 'red' }), Component) 

const renderer = createRenderer({
    enhancers: [ felaMonolithic({ prettySelectors: true }) ],
})

const html = renderToString(
    React.createElement(
        Provider,
        { renderer },
        React.createElement(Test)
    )
)

const result = html + renderToMarkup(renderer)
console.log(result)
