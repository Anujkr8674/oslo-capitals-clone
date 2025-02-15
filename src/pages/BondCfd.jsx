import React from "react";
import "../style/BondCfd.css";

const BondCfd = () => {
  return (
    <div className="bond-container">
      <header className="bond-header">
        <h1>Bonds CFDs Trading</h1>
        <p>
          <b>
        Bond trading is when bond investors and traders are allowed to buy or
        <br/>sell corporate bonds and government bonds in the bond market. Trade
        <br/>Bond CFDs such as US 10 YR T-Note Futures (US10YR) & UK Long Gilt
        <br/>Futures (GILT) on Metatrader 4 and 5.</b>
        </p>
      </header>


      
      {/* Why Trade Forex */}
      <h1 id="forex">What is Bond trading ?</h1>
      <section className="forex-why-trade">
        
          <div className="text1">A bond is an over-the-counter exchange-traded fund (ETF) and fixed-income financial instrument issued by corporations and governments (IOU) as debt securities (Coupon and Zero-coupon bonds) for a period of time mainly to pay down other debts and operations funding purposes through brokerage firms in the secondary market.
            <br/><br/>
            Bond trading is when bond investors and traders (lenders) are allowed to buy or sell corporate bonds and government bonds (bond issuers) in the bond market (public debt market). The issuer (borrower) must pay back the bond price (face value), interest rate, and a fixed or variable interest payment (dividend) to the bondholders on the bond maturity date. Traders consider bond investing one of the most effective portfolio diversification strategies.
          </div>

          <div className="text1">
            <h4>Types of Bond Markets:</h4>
            <ul>
                <li>Emerging Market Bonds</li><br/>
                <li>Mortgage-Backed Bonds (MBS)</li><br/>
                <li>Municipal Bonds (Munis)</li><br/>
                <li>Government Bonds</li><br/>
                <li>Corporate Bonds (High yield bonds or Junk bonds, Investment grade bonds, Guaranteed bonds, Secured bonds)</li><br/>
                <li>Bond Indices</li>
            </ul>
            
          </div>
      </section>


        <div className="bond">
      <h1 id="forex">How does Bonds trading work ?</h1>
      <section id="bondclr" className="forex-why-trade">
        
          <div className="text1">
             Treasury bonds and agency bonds are fixed income securities issued by governments and corporations for a fixed period of time and sold to investors who can purchase bonds as debt obligations and profit from the bond price and market volatility, coupon payments (dividends) and yield to maturity. Bond trading is mainly affected by the stock market conditions and liquidity, interest rate risk, issuance of new bonds, the bond issuer’s credit quality, credit risk and credit rating. Bond funds are more volatile because they don’t have a fixed price and interest rate. The price of the bond is in an inverse relationship with interest rates.
          </div>

          <div className="text1">
           
            <ul>
                <li> Short-term bonds (1 – 5 yrs)</li><br/>
                <li> Intermediate-term bonds (5 – 12 yrs)</li><br/>
                <li>Long-term bonds (12 – 30 yrs)</li><br/>
                <li> High Bond Yields – Low Bond Prices</li><br/>
                {/* <li>Corporate Bonds (High yield bonds or Junk bonds, Investment grade bonds, Guaranteed bonds, Secured bonds)</li><br/> */}
                <li> Low Bond Yields – High Bond Prices</li>
            </ul>
            
          </div>
          
        </section>
            <p id="bondp" >A bond rate is fixed at its purchase, and the bond issuer must pay interest regularly until the bond’s maturity, in which the original sum of the investment must be paid back to the bond investors.</p>
        </div>


        {/* What is Forex Trading */}
      <section id="trade11" className="forex-what-is">
        <h2>Why Trade Bond CFDs ?</h2>
        <br/>
        <p>
        Volatility is lower in the bond markets than trading stock and other markets because bonds provide a predictable income flow – bond coupon – as fixed-income securities. However, bonds with lower coupon rates are more volatile than bonds with higher coupon rates.</p><br/>
        <p>Μost investors tend to trade bonds as an effective portfolio diversification strategy benefiting from the bond markets reduced fluctuations, liquidity and risks given the low volatility of bonds trading, an individual bond’s known details and fixed coupon payments. To achieve proper portfolio diversification, investors often hold their bond CFDs to maturity in order to secure their funds and potential profits since the original sum invested in bonds trading will be paid back by the bond issuer.</p><br/>
        <p>Yet, risks are always present when trading, whatever the type of investment. Bond prices can be negatively affected when governments and corporations issue new bonds or risk default events. Traders can also use Bonds trading to pick up bond yields by trading volatility (spread betting strategy) or seize any potential bond price increase from a credit upgrade. Bond CFDs offer traders the possibility to re-sell bonds when interest rates are increasing without the need to hold onto them until the maturity date.</p>
        
         </section>

         <div className="example">
          <h1>An Example of Bonds CFD Trading</h1>
          <p>Suppose you want to trade CFDs, where the underlying asset is the US10YR, known as ‘’US 10yr T-Note” Let us suppose that the US10YR is trading at BID 130.62 ASK 131.76</p>
         </div>

         <div className="profitloss">
          <div className="profit">
          <p>You decide to buy 100 contracts of US10YR because you think that the US10YR price will rise in the future. Your margin rate is 1%. This means that you need to deposit 1% of the total position value into your margin account.</p><br/>
            <img src="/images/redbonds.png" alt="loss"/>
           
          </div>

          <div className="loss">
            <p>In the next hour, if the bond price moves to 132.3/133.2, you have a winning trade. You could close your position by selling at the current (bid) price of US10YR, which is 132.3.</p><br/>
            <img src="/images/greenbonds.png" alt="loss"/>
          </div>
         </div>


        <div id="bond11">
         <section id="trade11" className="forex-what-is">
        <h2>Advantages of Bond CFDs trading</h2>
        <br/>
            <ul>
                <li id="bond12">Fixed Income Security</li><br/>
                <li id="bond12">Safer Investment compare to other types of trading</li><br/>
                <li id="bond12">Less Technical Analysis</li><br/>
                <li id="bond12">Initial Investment paid back to bondholder by the issuer</li><br/>
                <li id="bond12">Possibility to resell bond CFD before the bond maturity date</li><br/>
                <li id="bond12">Effective Portfolio Diversification Strategy</li><br/>
                <li id="bond12">Long Term Investment</li>
            </ul>
         </section>
         </div>
      
    </div>
  );
};

export default BondCfd;
