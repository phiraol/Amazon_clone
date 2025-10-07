import React from 'react'
import { categoryInfos } from "./CategoryFullInfos";
import CategoryCard from './CategoryCard';
import classes from "./Category.module.css"
function Category() {
  return (
    <section className={classes.category_container}>
      { 
        categoryInfos.map((infos) => {
          return <CategoryCard data = {infos}></CategoryCard>
        })
      }
    </section>
  )
}

export default Category
