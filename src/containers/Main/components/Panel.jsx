import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem, IconButton } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData, refreshData }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={"País-" + country.label} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary" display={{ xs: 'block', md: 'inline' }}>
            COVID19
          </Typography>
          <Typography variant="h6" component="span" color="primary" display={{ xs: 'block', md: 'inline' }} mx={{ md: 2 }}>
            Painel Coronavirus
          </Typography>
          <Typography variant="body2" component="span" color="primary" display={{ xs: 'block', md: 'inline' }}>
            Atualizado em: {updateAt}
          </Typography>

          <div className='pt-2'>
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>

            <IconButton sx={{ mx: 2 }} onClick={refreshData}>
              <img src={RefreshIcon} alt="refresh button" />
            </IconButton>
          </div>
        </div>

        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel);