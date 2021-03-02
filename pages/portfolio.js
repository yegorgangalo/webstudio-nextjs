import { useState, useEffect } from 'react';
import axios from 'axios';
import { MainLayout } from '../layouts/MainLayout';
import ExampleItem from '../components/ExampleItem';


export default function Portfolio({ serverTypes, serverExamples }) {
  const [examples, setExamples] = useState(serverExamples);
  const [types, setTypes] = useState(serverTypes);
  const [filter, setFilter] = useState('');
  const [filteredExamples, setFilteredExamples] = useState('');

    useEffect(() => {
      if (!examples) {
        return;
      }
      const filtered = examples.filter(example => {
        return (filter === 'Все' || filter === '') ?
          example :
          example.type.includes(filter.slice(0, -1));
      })
      setFilteredExamples(filtered);
    }, [filter, examples])

    useEffect(() => {
        async function load() {
          const {data: portfolioTypes} = await axios.get(`${process.env.API_URL}/portfolio-types`);
          setTypes(portfolioTypes);
          const {data: portfolioExamples} = await axios.get(`${process.env.API_URL}/examples`);
          setExamples(portfolioExamples);
        }
        !serverTypes && !serverExamples && load();
    }, [])

    if (!types || !examples) {
        return (
            <MainLayout headTitle="Portfolio">
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout headTitle="Portfolio">
            <section className="examples">
              <div className="container">
                <h1 className="visually-hidden">Примеры работ</h1>
                {/* <!--radio button--> */}
                  <ul className="filtr list">
                    {types && types.map((type, index) => (
                      <li className="item" key={index}>
                    <button type="button" className="button" onClick={()=>setFilter(type)}>{type}</button>
                  </li>)
                    )}
                </ul>
                {/* <!-- EXAMPLES --> */}
                <ul className="examples-list list">
                    {filteredExamples && filteredExamples.map(({id, ...example}) => (
                      <ExampleItem example={example} key={id}/>
                    ))
                  }
                </ul>
              </div>
            </section>
        </MainLayout>
    )
}

Portfolio.getInitialProps = async ({ req }) => {
    if (!req) {
      return {
        serverTypes: null,
        serverExamples: null
      }
    }
    const {data: types} = await axios.get(`${process.env.API_URL}/portfolio-types`);
    const {data: examples} = await axios.get(`${process.env.API_URL}/examples`);
    return {
        serverTypes: types,
        serverExamples: examples
    }
}