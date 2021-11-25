import styles from "styles/Bus/Route/Direction.module.scss"

const Direction = ({ origin, destination, atChecked }) => {
  return (
    <div className={styles.direction}>
      <div>
        <input
          type="radio"
          id="destination"
          name="position"
          onChange={atChecked}
          defaultChecked={true}
        />
        <label htmlFor="destination">往 {destination}</label>
      </div>
      <div>
        <input type="radio" id="origin" name="position" onChange={atChecked} />
        <label htmlFor="origin">往 {origin}</label>
      </div>
    </div>
  )
}

export { Direction }
