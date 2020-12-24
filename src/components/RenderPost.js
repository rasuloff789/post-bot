function RenderPost(array) {
  console.log(array.map(
    obj => (
      <li key={obj.id}>{obj.usedId}</li>
      )
      ))
      return (
        <>
        {array.map(
          obj => (
            <li key={obj.id}>{obj.usedId}</li>
            )
            )}
            </>
      )
          }
          
          export default RenderPost;