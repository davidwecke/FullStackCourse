const Header = (props) => {
    return (
      <>
        <h1>{props.header}</h1>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <>
        <p>{props.part.name} {props.part.exercises}</p>
      </>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <>
      {parts.map((part) => <Part key={part.id} part={part} />)}
      </>
    )
  }
  
  const Total = ({parts}) => {
    return (
      <>
        <p><b>Total Number of Exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</b></p>
      </>
    )
  }
  
  const Course = ({course}) => {
    return (
      <>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </>
    )
  }

  export default Course