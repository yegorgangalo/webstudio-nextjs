import { useState, useEffect } from 'react';
import axios from 'axios';
import { MainLayout } from '../layouts/MainLayout';
import ExampleList from '../components/ExampleList';
import FilterBtnList from '../components/FilterBtnList';

export default function Portfolio({ serverTypes, serverExamples }) {
  const [types, setTypes] = useState(serverTypes);
  const [examples, setExamples] = useState(serverExamples);
  const [filter, setFilter] = useState('');

    useEffect(() => {
        async function load() {
          const {data: portfolioTypes} = await axios.get(`${process.env.API_URL}/types`);
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
                <FilterBtnList types={types} setFilter={setFilter} />
                <ExampleList examples={examples} filter={filter}/>
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
    const {data: types} = await axios.get(`${process.env.API_URL}/types`);
    const {data: examples} = await axios.get(`${process.env.API_URL}/examples`);
    return {
        serverTypes: types,
        serverExamples: examples
    }
}