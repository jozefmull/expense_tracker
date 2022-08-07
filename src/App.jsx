import {useContext} from 'react'

import Main from './components/Main'
import Details from './components/Details'
import {GlobalContext} from './context/GlobalState'

import {Box,Typography,Button} from '@mui/material'

import DownloadIcon from '@mui/icons-material/Download';

import styles from './css/App.module.css'

function App() {
  const {loadDummyData, dataLoaded} = useContext(GlobalContext);

  return (
      <div className={styles.expense_tracker}>
        <Box className={styles.flex_column}>
          <Typography variant="h4" align="center">Track your expenses</Typography>
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
          {!dataLoaded && (
            <Button className={styles.load_data_btn} onClick={()=>loadDummyData()} endIcon={<DownloadIcon/>}>LOAD DUMMY DATA</Button>
          )}
        </Box>
      </div>
  );
}

export default App;
