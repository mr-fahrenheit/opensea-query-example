let axios = require('axios')
let os_api_key = '23eaf1789d914c6f91f1fa03ee65455c'
let nft_address = '0x98f35eec6055ed88200e30cb78b9b9427a55917b'

async function openSeaCall (url) {
  const response = await axios.get(url, {
    headers: {
      'X-API-KEY': os_api_key
    }
  })

  return response.data
}

async function queryAsset(id) {
  let data = await openSeaCall(`https://api.opensea.io/api/v1/assets?token_ids=${id}&asset_contract_address=${nft_address}&order_direction=desc&offset=0&limit=1`)
  console.log(data.assets[0])
}

queryAsset(1)