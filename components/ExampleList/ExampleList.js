import ExampleItem from '../ExampleItem';

export default function ExampleList({ examples, filter }) {

    const filteredExamples = examples.filter(example => {
      return (filter === 'Все' || filter === '') ?
        example :
        example.type.includes(filter.slice(0, -1));
    })

    return (
        <ul className="examples-list list">
            {filteredExamples && filteredExamples.map(({id, ...example}) => (
              <ExampleItem example={example} key={id}/>
            ))
          }
        </ul>
    )
}