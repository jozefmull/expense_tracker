import Main from './components/Main'
import Details from './components/Details'

import {Box} from '@mui/material'

import styles from './css/App.module.css'

function App() {

  return (
      <div className={styles.expense_tracker}>
        <Box className={styles.flex_column}>
          <Box className={styles.flex_row}>
            <Box className={styles.main_wrap}>
              <Main />
            </Box>
            <Box className={styles.flex_row_2}>
              <Box className={styles.details_wrap} >
                <Details title="Income"/>
                <Details title="Expense"/>
              </Box>
            </Box>
          </Box>
          {/* <Box className={styles.cap_gains_box}>
          </Box> */}
        </Box>
      </div>
  );
}

export default App;
