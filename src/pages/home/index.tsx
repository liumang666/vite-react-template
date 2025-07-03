import { useState } from 'react'
import classes from './index.module.less'
import { Button, Modal } from 'antd'

const Home = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(true)
  }

  return (
    <>
      <div className={classes.setColor}>
        home
        <div className={classes.blue}>666</div>
      </div>
      <Button
        type="primary"
        onClick={handleClick}
      >
        阿牛
      </Button>
      <Modal
        open={visible}
        onCancel={() => {
          setVisible(false)
        }}
      >
        1212
      </Modal>
    </>
  )
}
export default Home
