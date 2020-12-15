import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../store'
import { fetchItems } from './../../actions'
import { getTimeDifference } from './../../functions'

const FoodList = props => {
  const [state, dispatch] = useContext(Context)
  const [timeNow, setTimeNow] = useState(new Date())
  let timeDifference = 0

  useEffect(() => {
    /* Load items from API */
    fetchItems(dispatch)

    /* Update time on an interval to show the current time */
    const interval = setInterval(() => {
      setTimeNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='container' style={styles.container}>
      <table border='1' width='100%'>
        {state.foodList.map(item => {
          /* Set time difference for each item */
          timeDifference = getTimeDifference(item.expiresIn, timeNow)

          return (
            <tr key={item.id} className={'food-list__item'}>
              <td>{item.name}</td>

              {timeDifference < 6 && timeDifference > 0 && (
                <td style={{ color: 'red' }}>Expires in {timeDifference}</td>
              )}

              {timeDifference === 0 && <td>Expired</td>}

              {timeDifference > 5 && <td>Expires in {timeDifference}</td>}
            </tr>
          )
        })}
      </table>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export default FoodList
