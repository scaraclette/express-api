import React from 'react';
import './cats.css';

class Cats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('/api/cats')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.cats
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log('error');
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(this.state.items[0]);

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} is chonky: {JSON.stringify(item.isChonky)}
                        </li>
                    ))}
                </ul>
            );
        }
        
    }

}

export default Cats;
