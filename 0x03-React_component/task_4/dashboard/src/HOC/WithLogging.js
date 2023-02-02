import React from 'react';

function HOC(wrappedComponent) {
    class WithLogging extends React.Component {
        componentDidMount() {
            console.log(`Component ${WithLogging.displayName} is mounted `);
        }
        componentWillUnmount() {
            console.log(`Component ${WithLogging.displayName} is going to unmount`);
        }
    }
    WithLogging.displayName = `WithLogging(${wrappedComponent.displayName || wrappedComponent.name || 'Component'})`;
    return WithLogging;
}

export default HOC;
