import React from "react";
import "../style/Spreads.css";

const Spreads = () => {


    const data = [
        {
          symbol: "AUDCAD",
          product: "Australian Dollar vs Canadian Dollar",
          standardAvg: "1.3",
          rawMin: "0",
          rawAvg: "0.5",
        },
        {
          symbol: "AUDCHF",
          product: "Australian Dollar vs Swiss Franc",
          standardAvg: "1.6",
          rawMin: "0",
          rawAvg: "0.5",
        },
        {
          symbol: "AUDJPY",
          product: "Australian Dollar vs Japanese Yen",
          standardAvg: "1.6",
          rawMin: "0",
          rawAvg: "0.5",
        },
        {
          symbol: "AUDNZD",
          product: "Australian Dollar vs New Zealand Dollar",
          standardAvg: "1.5",
          rawMin: "0",
          rawAvg: "0.7",
        },
        {
          symbol: "AUDSGD",
          product: "Australian Dollar vs Singapore Dollar",
          standardAvg: "3.9",
          rawMin: "0.3",
          rawAvg: "2.4",
        },
        {
          symbol: "AUDUSD",
          product: "Australian Dollar vs US Dollar",
          standardAvg: "1.2",
          rawMin: "0",
          rawAvg: "0.2",
        },
        {
          symbol: "BWPUSD",
          product: "Botswanan Pula vs US Dollar",
          standardAvg: "1.7",
          rawMin: "0.8",
          rawAvg: "0.9",
        },
        {
          symbol: "CADCHF",
          product: "Canadian Dollar vs Swiss Franc",
          standardAvg: "1.4",
          rawMin: "0",
          rawAvg: "0.6",
        },
        {
          symbol: "CADJPY",
          product: "Canadian Dollar vs Japanese Yen",
          standardAvg: "1.6",
          rawMin: "0",
          rawAvg: "0.5",
        },
        {
          symbol: "CHFJPY",
          product: "Swiss Franc vs Japanese Yen",
          standardAvg: "2",
          rawMin: "0",
          rawAvg: "0.9",
        },
        {
          symbol: "CHFSGD",
          product: "Swiss Franc vs Singapore Dollar",
          standardAvg: "5.6",
          rawMin: "0.6",
          rawAvg: "4.5",
        },
        {
          symbol: "EURAUD",
          product: "Euro vs Australian Dollar",
          standardAvg: "1.6",
          rawMin: "0",
          rawAvg: "0.6",
        },
        {
          symbol: "EURCAD",
          product: "Euro vs Canadian Dollar",
          standardAvg: "2.2",
          rawMin: "0",
          rawAvg: "0.6",
        },
        {
          symbol: "EURCHF",
          product: "Euro vs Swiss Franc",
          standardAvg: "1.5",
          rawMin: "0",
          rawAvg: "0.5",
        },
        {
          symbol: "EURCZK",
          product: "Euro vs Czech Koruna",
          standardAvg: "143.5",
          rawMin: "0",
          rawAvg: "122.7",
        },
        {
          symbol: "EURDKK",
          product: "Euro vs Danish Krone",
          standardAvg: "18.4",
          rawMin: "0.5",
          rawAvg: "12.4",
        },
        {
          symbol: "EURGBP",
          product: "Euro vs Great Britain Pound",
          standardAvg: "1.4",
          rawMin: "0",
          rawAvg: "0.3",
        },
        {
          symbol: "EURHUF",
          product: "Euro vs Hungarian Forint",
          standardAvg: "244.5",
          rawMin: "0",
          rawAvg: "42.1",
        },
        {
          symbol: "EURJPY",
          product: "Euro vs Japanese Yen",
          standardAvg: "1.5",
          rawMin: "0",
          rawAvg: "0.5",
        },
        {
          symbol: "EURMXN",
          product: "Euro vs Mexican Peso",
          standardAvg: "90.4",
          rawMin: "0",
          rawAvg: "70.4",
        },
        {
          symbol: "EURNOK",
          product: "Euro vs Norwegian Krone",
          standardAvg: "63.3",
          rawMin: "0",
          rawAvg: "55.8",
        },
        {
          symbol: "EURNZD",
          product: "Euro vs New Zealand Dollar",
          standardAvg: "2",
          rawMin: "0",
          rawAvg: "0.9",
        },
        {
          symbol: "EURPLN",
          product: "Euro vs Polish Zloty",
          standardAvg: "27.2",
          rawMin: "0",
          rawAvg: "23.9",
        },
        {
          symbol: "EURSEK",
          product: "Euro vs Swedish Krona",
          standardAvg: "62.2",
          rawMin: "0",
          rawAvg: "56.7",
        },
        {
          symbol: "EURSGD",
          product: "Euro vs Singapore Dollar",
          standardAvg: "3.9",
          rawMin: "0",
          rawAvg: "2.8",
        },
        {
          symbol: "EURTRY",
          product: "Euro vs Turkish Lira",
          standardAvg: "294.2",
          rawMin: "0",
          rawAvg: "291.3",
        },
        {
          symbol: "EURUSD",
          product: "Euro vs US Dollar",
          standardAvg: "1.1",
          rawMin: "0",
          rawAvg: "0.1",
        },
        {
          symbol: "EURZAR",
          product: "Euro vs FCAn Rand",
          standardAvg: "126.8",
          rawMin: "0",
          rawAvg: "115.4",
        },




        // spreads metal


        
      ];


      const data1 = [
        {
            spreads_symbol: "XAGAUD",
            spreads_product: "Silver vs Australian Dollar",
            spreads_standardAvg: "0.013",
            spreads_rawMin: "0.04",
            spreads_rawAvg: "0.032",
        },
        {
            spreads_symbol: "XAGEUR",
            spreads_product: "Silver vs Euro",
            spreads_standardAvg: "0.004",
            spreads_rawMin: "0.02",
            spreads_rawAvg: "0.013",
        },
        {
            spreads_symbol: "XAGUSD",
            spreads_product: "Silver vs US Dollar",
            spreads_standardAvg: "0",
            spreads_rawMin: "0.02",
            spreads_rawAvg: "0.014",
        },
        {
            spreads_symbol: "XAUAUD",
            spreads_product: "Gold vs Australian Dollar",
            spreads_standardAvg: "0.06",
            spreads_rawMin: "0.63",
            spreads_rawAvg: "0.53",
        },
        {
            spreads_symbol: "XAUEUR",
            spreads_product: "Gold vs Euro",
            spreads_standardAvg: "0.01",
            spreads_rawMin: "0.4",
            spreads_rawAvg: "0.22",
        },
        {
            spreads_symbol: "XAUUSD",
            spreads_product: "Gold vs US Dollar",
            spreads_standardAvg: "0",
            spreads_rawMin: "0.21",
            spreads_rawAvg: "0.07",
        },
        {
            spreads_symbol: "XPDUSD",
            spreads_product: "Palladium vs US Dollar",
            spreads_standardAvg: "–",
            spreads_rawMin: "14.61",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "XPTUSD",
            spreads_product: "Platinum vs US Dollar",
            spreads_standardAvg: "–",
            spreads_rawMin: "5.22",
            spreads_rawAvg: "–",
        }




        
    ];




    const data2 = [
        {
            spreads_symbol: "AUS200",
            spreads_product: "Australia 200 Index vs Australian Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.61",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "CHINA50",
            spreads_product: "China A50 Index vs US Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "8.01",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "EURO50",
            spreads_product: "Euro 50 Index vs Euro Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.79",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "FRA40",
            spreads_product: "CAC 40 Index vs Euro Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.87",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "GER40",
            spreads_product: "German 40 Index vs Euro Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.27",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "HK50",
            spreads_product: "Hang Seng Index vs Hong Kong Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "5.86",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "INDIA50",
            spreads_product: "NIFTY 50 Index vs Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "16.1",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "ITA40",
            spreads_product: "Italy 40 index vs Euro Future",
            spreads_standardAvg: "–",
            spreads_rawMin: "12",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "JP225",
            spreads_product: "Japan 225 Index vs Japanese Yen Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "6.45",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "SPA35",
            spreads_product: "Spain 35 Index vs Euro Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "6.6",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "UK100",
            spreads_product: "UK100 Index vs Great Britain Pound Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.62",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "US100",
            spreads_product: "US Tech 100 Index vs US Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.53",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "US30",
            spreads_product: "US 30 Index vs US Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "1.97",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "US500",
            spreads_product: "US 500 Index vs US Dollar Cash",
            spreads_standardAvg: "–",
            spreads_rawMin: "0.5",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "USDX",
            spreads_product: "USD Index Basket vs US Dollar Future",
            spreads_standardAvg: "–",
            spreads_rawMin: "0.05",
            spreads_rawAvg: "–",
        },
        {
            spreads_symbol: "VIX",
            spreads_product: "VIX Index Cash vs US Dollar Future",
            spreads_standardAvg: "–",
            spreads_rawMin: "0.16",
            spreads_rawAvg: "–",
        }
    ];
    
    

  return (
    <div className="spreads-container">
      {/* Header Section */}
      <header className="spreads-header">
        <h1>Forex Spreads</h1>
      </header>

        <br/><br/>

      <div className="imgtext">

<div className="img1">
    <img src="/images/regimg.png" alt="girl"/>
      </div>
  

  <div  id="text" className="text">
    {/* <p id="p">You are safe with us.</p> */}
    
    <h1  className="h1">Regulations
    </h1 >
    <p>If you’ve been wondering, ‘is Extrede   legit?’, you can rest assured that we are a licensed broker, regulated by leading international governing bodies globally.</p>
    <br/>
    <h1  className="h1">Account security</h1>
    <p>Prevent unauthorized access to your secure trading accounts by choosing a security option – either phone or email – during your registration process.</p>
    </div>
    </div>

    <br/>

      {/* Intro Section */}
      <section className="spreads-intro">
        <div className="spreads-info">
          <h2>What is a Spread in Forex?</h2>
          <h2>What does Spread mean?</h2>
          <p>Trade with Extrede   on ultra-competitive spreads</p>
        </div>
        <div className="spreads-information">
            <p>Forex is the most traded market in the world offering numerous trading opportunities. One of the ways you pay for these opportunities is through the broker spreads, or the difference between the ask and bid prices of a tradable instrument. When the spread is tight, your trading cost reduces.</p>
            <p>Our diverse liquidity mix and partnerships with leading banking and non-banking financial institutions for deep liquidity also plays a key role in ensuring that we consistently deliver tight spreads to our traders, starting as low as 0.0 pips.</p>

        </div>
      </section>




      <div className="spreads-effects">
        <div className="effects">
            <h1>Spreads Affect Your Trades</h1>
            <p>Successful traders always keep track of any changes in the spread, basing trading decisions on such
            changes. Spread size plays an important role in trading, especially for scalpers and intraday traders</p>

        </div>
        <div className="spreads-effect">
            <div className="spreads-effect1">
                <h4>High Spreads</h4>
                
                <p>When the difference between the ask and bid prices are higher than usual, it could either indicate a period of low liquidity or high market volatility. For instance, non-major forex pairs tend to have a higher spread than major pairs.</p>
            </div>
            <div className="spreads-effect2">
                <h4>Low Spreads</h4>
                
                <p>When the difference between the ask and bid prices is lower than usual, it could indicate high liquidity or a period of low market volatility. For instance, spreads tend to be lower during the major forex sessions.</p>
            </div>
        </div>

      </div>



      <div className="what-is-Spread">
        <h1>What is Spread in Forex ?</h1>
        <div className="spreadtext">
            <p>Spread in Forex is the difference between the bid price and the ask price. The Spread cost is measured in ‘pips’ and is the cost of trading. Popular currency pairs such as the EUR/GBP and USD/AUD have lower spreads as a result of higher levels of liquidity. An in-depth explanation can be found in our Beginner’s Guide To Forex Trading</p>
            <p>Spread in Forex is the difference between the two prices of a currency pair. The Bid is the quote price at which a trader is willing to buy an asset, and the Ask level is the quote price at which a trader is willing to sell an asset. Organised by way of a two-way quote, signify willing buyers and ask prices determine willing sellers. This concept is fundamental for traders to comprehend as they are the primary cost of trading forex and currency pairs.</p>
            <p>For instance, if the bid/ask rate for the EUR/USD is 1.1251/1.1252. Here, EUR is the base currency and USD is the quote currency. This means that you can buy the EUR at a higher ask price of 1.1252 and sell it lower at the bid of 1.1251.</p>
            <p>The difference between ask and bid price in forex is known as the spread. In the above example, the spread in pips would be (1.1252-1.1251) = 0.0001. The pip value on USD-based pairs is identified on the 4th digit, after the decimal. This means that the final forex spread is 0.1 pips.</p>
            <p>To calculate the total spread cost, multiply this pip value by the total number of lots traded. So, if you are trading a EUR/USD trading lot of 10,000. In case you are trading a standard lot (100,000 units of the currency). Now, if your account is denominated in another currency, say GBP, you will need to convert that from US Dollars.</p>
            <p>Given the bid and ask prices traders can engage with the market immediately or on the spot. The ask price is slightly higher than the underlying market price, whereas the bid price is slightly below the underlying market price. Traders sell the bid and buy the ask. A narrower bid-ask spread translated to lower trading costs.</p>
            <p>The size of the spread plays a pivotal part in forex trading. This is particularly the case for those using trading strategies that conduct a large number of transactions in a single trading session. Trading volume, liquidity, market volatility, news, and time can all have an impact on spreads.</p>
            <p>The spread affects profit, given that a currency pair reveals information about market conditions such as time, volatility and liquidity. For instance, emerging currency pairs have a greater spread than major currency pairs. Currency pairs involving major currencies have lower spreads.</p>
            <p>Traders should also consider peak trading times for particular currencies. For instance, the cost of trading the Australian Dollar (AUD) will be higher during nighttime in Australia. This is because there are not as many market participants actively trading at this time. Similarly, other Australian financial markets that may influence forex are also closed at this time. A wider currency pair spread means that a trader would pay more when buying and receive less when selling.</p>
            <p>High spread usually occurs during periods of low liquidity or high market volatility. For instance, forex pairs that include the Canadian dollar (CAD) will have lower liquidity during overnight hours in Canada. The same applies to exotic currency pairs such as the NZD/MXN which have a significantly lower trading volume.</p>
            <p>Low spread in forex is the difference between the bid and the ask price. Traders prefer to place their traders when spreads are low like during the major forex sessions. Spreads are likely to be low when volatility is low and liquidity is high. When there is a bigger difference between the bid price (buy) and the ask price (sell), it means that traders are likely to spend more on wider spreads because of high volatility and lower market liquidity.</p>

        </div>
        <br/>


        

        <div className="what-is-Spreads">
            <div className="what-is-Spread1">
                <p>Spreads can widen considerably when the financial markets are volatile: a phenomenon known as slippage. It is also important to understand the difference between fixed and variable spreads. Fixed spreads remain the same, no matter what the market conditions are. Variable spreads keep on changing, based on the supply and demand of the instruments and the overall market volatility. Choosing the optimal spread type is important to keeping trading costs to a minimum. Retail traders who trade less frequently could benefit from fixed spreads while those who trade frequently and during peak market hours (when the spreads are the tightest), might prefer variable spreads. Variable spreads tend to be lower than fixed spreads, especially in calmer markets. Explore our wide range of forex account types.</p>

            </div>
            <div className="what-is-Spread2">
                <p>The spread of a given currency pair reveals information about market conditions such as time, volatility and liquidity. Emerging currency pairs have a greater spread than major currency pairs. There are 8 major currencies which account for approximately 85% of the forex market turnover. With more market makers, real-time pricing and higher trade volumes, pairs involving major currencies have lower spreads. In addition, there are peak trading times for particular currencies. For instance, the cost of trading the AUD will be higher when it is night time in Australia. This is as there are not as many market participants actively trading at this time. Similarly, other Australian financial markets that may influence forex are also closed at this time.</p>
            </div>
        </div>
      </div>


    <br/><br/><br/>
      
      <section id="broker" className="comm-best-platform">
        
        <div className="content1">

          <div className="text-content1">
            <h2>Forex Broker Spreads</h2>
            {/* <p>Where the underlying asset is the AUD/USD currency pair, also known as the “Aussie.” Let us suppose that the AUD/USD pair is trading at:</p> */}
            <p>Suppose you want to trade CFDs, where the underlying asset is the XTIUSD a commodity, also known as Crude Oil. Let us suppose that the XTIUSD is trading at:</p>
          </div>

          <div className="image-container">
            <img src="/images/spread2.png" alt="Trading Platform" />
          </div> 
        </div>
      </section>

      <div className="spreads-blue">
        <p>For example, if the bid/ask rate for the EUR/USD is 1.1251/1.1252. Here, EUR is the base currency and USD is the quote currency. This means that you can buy the EUR at a higher ask price of 1.1252 and sell it lower at the bid of 1.1251.</p>

        <p>The difference between ask and bid price is the forex spread. In the above example, the spread in pips would be (1.1252-1.1251) = 0.0001. The pip value on USD-based pairs is identified on the 4th digit, after the decimal. This means that the final forex spread is 0.1 pips.</p>
      </div>



      <div id="spreads" className="profitloss">
          <div className="profit">
          <p>To calculate the total spread cost, multiply this pip value by the total number of lots traded. So, if you are trading a EUR/USD trading lot of 10,000</p><br/>
            <img src="/images/spredcard.png" alt="loss"/>
           
          </div>

          <div className="loss">
            <p>In case you are trading a standard lot (100,000 units of the currency)</p><br/>
            <img src="/images/spgreencard.png" alt="loss"/>
          </div>
         </div>

         <div className="spreadsdiv">
            <div className="spreadsdiv1">
                <p>Now, if your account is denominated in another currency, say GBP, you will need to convert that from US Dollars.</p>
                <p>It is important for forex traders to be familiar with forex spreads, since they represent the primary cost of trading. It is an important parametre to consider when you choose a broker.</p>
            </div>
            <div className="spreadsdiv2">
                <p>If you choose to open and trade with an Extrede   RAW ECN account, you will find some of the lowest spreads in the market. Our liquidity is sourced from some of the largest and best liquidity providers. This gives us the ability to offer you the tightest spreads, starting as low as 0.0 pips during the most liquid times, something that was previously the domain of hedge funds only. You can always check our trading conditions by opening a demo account.</p>
            </div>
         </div>



         <div className="understanding">
            <h1>Understanding High and Low Forex Spreads</h1>
            <div className="understanding1">
                <div className="understandingtext1">
                    <p>It is important to know that FX spreads can fluctuate throughout the day. This is because spreads are influenced by several factors, such as liquidity, volatility and market news. You will see some major currency pairs, like the EUR/USD or GBP/USD, which tend to have more liquidity, also have lower spreads than emerging currency pairs, like the USD/JPY.</p>
                    <p>Also, liquidity can decline and spreads can widen in the days or hours leading up to major economic news events and between trading sessions.</p>
                    <p>Keep an eye on the economic calendar. Releases occur sporadically and depending on whether expectations are met or not, prices can fluctuate rapidly. If you are currently holding a position and the spread widens, you could receive a margin call. Spreads can widen considerably when the financial markets are volatile: a phenomenon known as slippage.</p>
                </div>
                <div className="understandingtext2">
                    <p>It is also important to understand the difference between fixed and variable spreads. Fixed spreads remain the same, no matter what the market conditions are. Variable spreads keep on changing, based on the supply and demand of the instruments and the overall market volatility.</p>
                    <p>Choosing the optimal spread type is important to bring down trading costs and is a key part of the trading strategy of any decent trader. While retail traders with smaller accounts, who trade less frequently, could benefit from fixed spreads, those who trade more frequently and during peak market hours (when the spreads are the tightest), might prefer variable spreads. Variable spreads tend to be lower than fixed spreads especially in calmer markets.</p>

                </div>
            </div>
         </div>


         <section className="comm-best-platform">
      {/* <h2>What is Commodities Trading?</h2> */}
        <div id="spreads-content" className="content1">
            <div className="image-container">
                <img src="/images/spreads2.png" alt="Trading Platform" />
            </div>
          <div className="text-content1">

            <h2 id="low">Industry Leading Low Forex Spreads</h2>
            <p>Extrede   provides variable spreads for fast trade execution, with low probability of requotes. Our feed comes from leading international financial institutions for deep liquidity, along with real-time price quotes for different tradable instruments. This allows us to offer forex spreads as low as 0.0 pips on RAW ECN accounts and 1.0 pips on Standard STP accounts.</p>
            
            </div>
          
        </div>
       </section>


       <h2 id="spreadshead">Meta Trader RAW ECN Account
       <br/>Commission Charges</h2>
       <p id="spreadspara">Check our commission charges for the RAW ECN account, based on the currency denomination of your
            trading account. The table has been split, based on commission per lot, to make it easier for you to
            calculate your costs, based on trading volume.</p>
            <br/>
        <div className="image-container1">
            <img src="/images/spreads1.png" alt="Trading Platform" />
        </div> 



        
      <div className="spreads-blue-text">
        <h1>Spreads</h1>
        <p id="s2023">(2023)</p>
        <p>Spreads on our MetaTrader 5 platform are variable, with quotes coming from major international
            financial institutions. During liquid times our industry-leading spreads can go as low as 0.0 pips. Our
            more typical spreads are listed below.
        </p>
       </div>




       

       <section id="forex-spreads" className="forex-spreads">
      <div className="table-container">
        <h2>Forex Spreads</h2>
        <table className="forex-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Product</th>
              <th colSpan="1">Standard A/c</th>
              <th colSpan="2">Raw ECN A/c</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th>Avg</th>
              <th>Min</th>
              <th>Avg</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.symbol}</td>
                <td>{row.product}</td>
                <td>{row.standardAvg}</td>
                <td>{row.rawMin}</td>
                <td>{row.rawAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    



 

    <div id="metalspreads">

    <section  id="forex-spreads"className="forex-spreads">
  <div className="table-container">
    <h2>Metal Spreads</h2>
    <table className="forex-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Product</th>
          <th colSpan="1">Standard A/c</th>
          <th colSpan="2">Raw ECN A/c</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Avg</th>
          <th>Min</th>
          <th>Avg</th>
        </tr>
      </thead>
      <tbody>
        {data1.map((row, index) => (
          <tr key={index}>
            <td>{row.spreads_symbol}</td>
            <td>{row.spreads_product}</td>
            <td>{row.spreads_standardAvg}</td>
            <td>{row.spreads_rawMin}</td>
            <td>{row.spreads_rawAvg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
</div>








<section id="forex-spreads" className="forex-spreads">
      <div className="table-container">
        <h2>CFD Indices Spreadss</h2>
        <table className="forex-table">
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Product</th>
          <th colSpan="1">Standard A/c</th>
          <th colSpan="2">Raw ECN A/c</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Avg</th>
          <th>Min</th>
          <th>Avg</th>
        </tr>
      </thead>
      <tbody>
        {data2.map((row, index) => (
          <tr key={index}>
            <td>{row.spreads_symbol}</td>
            <td>{row.spreads_product}</td>
            <td>{row.spreads_standardAvg}</td>
            <td>{row.spreads_rawMin}</td>
            <td>{row.spreads_rawAvg}</td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </section>




       {/* <div className="spreadsFX-container">
      <h2 className="spreadsFX-heading">Forex Spreads</h2>
      <div className="spreadsFX-table-wrapper">
        <table className="spreadsFX-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Product</th>
              <th>Standard A/c <br /> <small>Avg</small></th>
              <th>Raw ECN A/c <br /> <small>Min</small></th>
              <th>Raw ECN A/c <br /> <small>Avg</small></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AUDCAD</td>
              <td>Australian Dollar vs Canadian Dollar</td>
              <td>1.3</td>
              <td>0</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDCHF</td>
              <td>Australian Dollar vs Swiss Franc</td>
              <td>1.6</td>
              <td>0
              </td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDJPY</td>
              <td>Australian Dollar vs Japanese Yen</td>
              <td>1.6</td>
              <td>0</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDNZD</td>
              <td>Australian Dollar vs New Zealand Dollar</td>
              <td>1.5</td>
              <td>0</td>
              <td>0.7</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>AUDCAD</td>
              <td>Australian Dollar vs Canadian Dollar</td>
              <td>1.3</td>
              <td>0</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDCHF</td>
              <td>Australian Dollar vs Swiss Franc</td>
              <td>1.6</td>
              <td>0
              </td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDJPY</td>
              <td>Australian Dollar vs Japanese Yen</td>
              <td>1.6</td>
              <td>0</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDNZD</td>
              <td>Australian Dollar vs New Zealand Dollar</td>
              <td>1.5</td>
              <td>0</td>
              <td>0.7</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>AUDCAD</td>
              <td>Australian Dollar vs Canadian Dollar</td>
              <td>1.3</td>
              <td>0</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDCHF</td>
              <td>Australian Dollar vs Swiss Franc</td>
              <td>1.6</td>
              <td>0
              </td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDJPY</td>
              <td>Australian Dollar vs Japanese Yen</td>
              <td>1.6</td>
              <td>0</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td>AUDNZD</td>
              <td>Australian Dollar vs New Zealand Dollar</td>
              <td>1.5</td>
              <td>0</td>
              <td>0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> */}





    
    </div>
  );
};

export default Spreads;
