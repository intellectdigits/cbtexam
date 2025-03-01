
 function load6(){
  
    for(count=0; count<65; count++){
$("#questions option:eq("+count+")").replaceWith("<option value='"+count+"'>"+Math.floor(Math.random()*40)+"</option>");
}
$("#questions").hide()
    $("#showcorrection").hide()
    $("#correction6").hide()
    $("#result").hide()
    let sno = parseInt($("#sno6").text()) - 1;

   
   
    let data = [
      {
          question: "A tariff is a tax imposed on",
          optionA: "Consumer goods",
          optionB: "Domestic goods",
          optionC: "Imported goods",
          optionD: "Exported goods",
          correct: "Imported goods",
        },
        {
          question:
            "The demand for a good is price inelastic if",
          optionA: "The price elasticity is less than one",
          optionB: "The price elasticity is one",
          optionC: "The price elasticity is negative",
          optionD: "The price elasticity is greater than one",
          correct: "The price elasticity is less than one",
          sno: "",
        },
        {
          question:
            "Which of the following is an example of free good?",
          optionA: "Free education",
          optionB: "Water in the ocean",
          optionC: "Dinner you did not pay for",
          optionD: "Your rented apartment",
          correct: "Water in the ocean",
          sno: "",
        },
        {
          question:
            "The marginal propensity to consume is",
          optionA: "Options A, B and C",
          optionB: "ΔC/ΔY",
          optionC: "The slope of the consumption function",
          optionD: "Coefficient c in the equation C = C + cYd",
          correct: "Options A, B and C",
          sno: "",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        },
        {
          question: "The short run can be defined as the period of time during which",
          optionA: "All inputs are fixed",
          optionB: "At least one of the firm's input is fixed",
          optionC: "At least two inputs are fixed",
          optionD: "All inputs are variable",
          correct: "At least one of the firm's input is fixed",
          sno: "9",
        },
        {
          question: `The "velocity" of money is`,
          optionA: "The real money supply divided by the real GDP",
          optionB: "The money supply multiplied by the price level",
          optionC: "The money supply divided by the price level",
          optionD: "The ratio of real GDP to the real money supply",
          correct: "The ratio of real GDP to the real money supply",
          sno: "6",
        },
        {
          question: "The part of income after tax that is not consumed is defined as",
          optionA: "Wages and salaries",
          optionB: "Saving",
          optionC: "Capital investment",
          optionD: "Nondurable goods expenditure",
          correct: "Saving",
          sno: "10",
        },
        {
          question:"An industry is",
          optionA: "A group of firms producing differentiated products",
          optionB: "A group of firms producing distinct commodities",
          optionC: "A group of firms producing related goods",
          optionD: "A group of firms producing unrelated goods",
          correct: "A group of firms producing related goods",
          sno: "11",
        },
        {
          question: "The type of unemployment that occurs when an individual cannot find job as a result of obsolete skill is",
          optionA: "Structural unemployment",
          optionB: "Cyclical unemployment",
          optionC: "Seasonal unemployment",
          optionD: "Frictional unemployment",
          correct: "Structural unemployment",
          sno: "12",
        },
        {
          question: "The theory of ............... was propounded by ..................",
          optionA: "Comparative advantage; Mercantilists",
          optionB: "Absolute advantage; Adam Smith",
          optionC: "Comparative advantage; Adam Smith",
          optionD: "Absolute advantage; David Ricardo",
          correct: "Absolute advantage; Adam Smith",
          sno: "14",
        },
        {
          question: `If a business' total economic cost of producing 10,000 units of a product is N750,000 and this output is sold to consumers for N1,000,000, then the firm would earn`,
          optionA: "A normal profit of N750,000",
          optionB: "An economic profit of N750,000",
          optionC: "A normal profit o N1,750,000",
          optionD: "An economic profit of N250,000",
          optionC: "An economic profit of N250,000",
        },
        {
          question: "One major problem facing West African countries is",
          optionA: " Relations with Colonial Masters",
          optionB: "Joint Military operations in Member States",
          optionC: "Political integration",
          optionD: "Financial crunch of Member States",
          correct: " Relations with Colonial Masters",
        },{
          question: "The development of an economic hypothesis through intuition, insight, or logic is associated with",
          optionA: "Deduction",
          optionB: "Policy economics",
          optionC: "Normative economics",
          optionD: "Induction",
          correct: "Normative economics",
        },{
          question: `A major factor contributing to productivity is`,
          optionA: "Immigration of young workers",
          optionB: "The labour force",
          optionC: "The baby boom of generation",
          optionD: "The rate of GDP per year",
          correct: "The labour force",
        },{
          question: ".............is presently used in Nigeria to measure inflation",
          optionA: " GNP implicit price deflator",
          optionB: "Consumer price index",
          optionC: "Wholesale price index",
          optionD: "Real Gross Domestic Product",
          correct: "Consumer price index",
        },{
          question: `The fundamental problem of economics is`,
          optionA: " Finding striking determinants between the forces of supply and demand",
          optionB: "The scarcity of productive resources relative to society's unlimited wants",
          optionC: "The establishment of a political framework to determine the what, how and for whom of production",
          optionD: "To establish an equitable distribution of income",
          correct: "The scarcity of productive resources relative to society's unlimited wants",
        },{
          question: "Real cost is",
          optionA: "Alternative commodities forgone",
          optionB: "Amount of money spent on goods and services",
          optionC: "Cost of goods and servicesl",
          optionD: "True cost",
          correct:  "Cost of goods and servicesl",
        },{
          question: "..................... is the highest body in ECOWAS organogram",
          optionA: "Authority of Head of State and Government",
          optionB: "The Executive Secretariat",
          optionC: "The Defense Council",
          optionD: "Council of Ministers",
          correct: "Authority of Head of State and Government",
        },{
          question: `Government uses all of the following ways to redistribute income, except
`,
          optionA: "Market intervention",
          optionB: "Transfer earnings",
          optionC: "Limited liability",
          optionD: "Taxation",
          correct: "Limited liability",
        },{
          question: "The sides of a stage are called",
          optionA: "both sides",
          optionB: "the ways",
          optionC: "the wings",
          optionD: "the pits",
          correct: "the wings",
        },{
          question: `The principle that specified that the amount, when and how to pay tax should be made known to tax payer is known asf`,
          optionA: " Principle of economy",
          optionB: "Principle of convenience",
          optionC: "Principle of simplicity",
          optionD: "Principle of certainty",
          correct: "Principle of certainty",
        },{
          question: `Business cycle is associated with`,
          optionA: "Recession",
          optionB: "Unemployment",
          optionC: "Seasonal variationn",
          optionD: "Inflation",
          correct: "Recession",
        },{
          question: "Economic problem occurs when",
          optionA: "There is scarcity relative to demand",
          optionB: "All raw materials are importedt",
          optionC: "Many people are out of work",
          optionD: "There are no buyers for our goods",
          correct: "There is scarcity relative to demand",
        },{
          question: "A ............ in the price of the domestic currency in terms of a foreign currency is referred to as .............",
          optionA: "Decrease, appreciation",
          optionB: "Increase, de-appreciation",
          optionC: "Decrease, depreciation",
          optionD: "Increase, consolidation",
          correct:  "Decrease, depreciation",
        },{
          question: "Among all the determinants of economic growth, the most important one is",
          optionA: "Human capital",
          optionB: "Increased GDP",
          optionC: "Land and Natural resources",
          optionD: "Technologies",
          correct: "Increased GDP",
        },{
          question: `An increase in money income with constant price results in`,
          optionA: "Outward shift in the budget line",
          optionB: "Inward parallel shift in the budget line",
          optionC: "Options A and C",
          optionD: "Budget line remain constant",
          correct: "Outward shift in the budget line",
        },{
          question: `The law of supply states that, other things being constant, as price increases`,
          optionA: "Supply increases",
          optionB: "Supply decreases",
          optionC: "Quantity supplied increases",
          optionD: "Quantity supplied decreases",
          correct: "Quantity supplied increases",
        }
      ];

       
          const scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
          localStorage.setItem("score3", JSON.stringify(scores))
          $("#question6").empty();
          $("#question6").append(`<span>${data[$("#questions option:eq("+0+")").text()].question}</span>`);
          $("#6A").empty();
          $("#6A").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionA}</span>`);
          $("#6B").empty();
          $("#6B").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionB}</span>`);
          $("#6C").empty();
          $("#6C").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionC}</span>`);
          $("#6D").empty();
          $("#6D").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionD}</span>`);
        
          $("#next6").click(() => {
            
            let string = JSON.stringify(scores)
          localStorage.setItem("score2", string)
            
            if (sno < 20- 1) {
              sno = sno + 1;
              $("#sno6").text(sno + 1);
              $("#question6").empty();
              $("#question6").append(`<span>${data[$("#questions option:eq("+sno+")").text()].question}</span>`);
              $("#6A").empty();
              $("#6A").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionA}</span>`);
              $("#6B").empty();
              $("#6B").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionB}</span>`);
              $("#6C").empty();
              $("#6C").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionC}</span>`);
              $("#6D").empty();
              $("#6D").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionD}</span>`);
              $('#correction6').empty()
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionA){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:A</h4>")
              }
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionB){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:B</h4>")
              }
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionC){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:C</h4>")
              }
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionD){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:D</h4>")
              }  
                    }
                    if($("#memory6 option:eq("+sno+")").text()=="A"){
              $('#radio6A').prop('checked', true);
            
            }
            else{
              $('#radio6A').prop('checked', false);
            }
            
            if($("#memory6 option:eq("+sno+")").text()=="B"){
              $('#radio6B').prop('checked', true);
            }
            else{
              $('#radio6B').prop('checked', false);
            }
            if($("#memory6 option:eq("+sno+")").text()=="C"){
              $('#radio6C').prop('checked', true);
            }
            else{
              $('#radio6C').prop('checked', false);
            }
            if($("#memory6 option:eq("+sno+")").text()=="D"){
              $('#radio6D').prop('checked', true);
            }
            else{
              $('#radio6D').prop('checked', false);
            }
          });
          $("#previous6").click(() => {
           
            if (sno > 0) {
              sno = sno - 1;
              $("#sno6").text(sno + 1);
              $("#question6").empty();
              $("#question6").append(`<span>${data[$("#questions option:eq("+sno+")").text()].question}</span>`);
              $("#6A").empty();
              $("#6A").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionA}</span>`);
              $("#6B").empty();
              $("#6B").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionB}</span>`);
              $("#6C").empty();
              $("#6C").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionC}</span>`);
              $("#6D").empty();
              $("#6D").append(`<span>${data[$("#questions option:eq("+sno+")").text()].optionD}</span>`);
              $('#correction6').empty()
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionA){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:A</h4>")
              }
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionB){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:B</h4>")
              }
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionC){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:C</h4>")
              }
              if(data[$("#questions option:eq("+sno+")").text()].correct==data[$("#questions option:eq("+sno+")").text()].optionD){
                $('#correction6').append("<h4 style='color:green'>Correct Answer:D</h4>")
              }          }
              if($("#memory6 option:eq("+sno+")").text()=="A"){
              $('#radio6A').prop('checked', true);
            }
            else{
              $('#radio6A').prop('checked', false);
            }
            
            if($("#memory6 option:eq("+sno+")").text()=="B"){
              $('#radio6B').prop('checked', true);
            }
            else{
              $('#radio6B').prop('checked', false);
            }
            if($("#memory6 option:eq("+sno+")").text()=="C"){
              $('#radio6C').prop('checked', true);
            }
            else{
              $('#radio6C').prop('checked', false);
            }
            if($("#memory6 option:eq("+sno+")").text()=="D"){
              $('#radio6D').prop('checked', true);
            }
            else{
              $('#radio6D').prop('checked', false);
            }
          });
          $("#6A").click(() => {
            alert(data[$("#questions option:eq("+sno+")").text()].correct)
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>A</option>");
            $("#f"+(sno+1)).css("backgroundColor","green")
            $('#radio6A').prop('checked', true);
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6A").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#6B").click(() => {
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>B</option>");
            $('#radio6B').prop('checked', true);
            $("#f"+(sno+1)).css("backgroundColor","green")
  
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6B").text()) {
           
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#6C").click(() => {
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>C</option>");
            $('#radio6C').prop('checked', true);
            $("#f"+(sno+1)).css("backgroundColor","green")
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6C").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#6D").click(() => {
          
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>D</option>");
            $('#radio6D').prop('checked', true);
            $("#f"+(sno+1)).css("backgroundColor","green")
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6D").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#radio6A").click(() => {
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>A</option>");
            console.log("scores",scores)
            $("#f"+(sno+1)).css("backgroundColor","green")
            $('#radio6A').prop('checked', true);
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6A").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#radio6B").click(() => {
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>B</option>");
            $('#radio6B').prop('checked', true);
            $("#f"+(sno+1)).css("backgroundColor","green")
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6B").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#radio6C").click(() => {
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>C</option>");
            $('#radio6C').prop('checked', true);
            $("#f"+(sno+1)).css("backgroundColor","green")
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6C").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#radio6D").click(() => {
            $("#memory6 option:eq("+sno+")").replaceWith("<option value='"+sno+"'>D</option>");
            $('#radio6D').prop('checked', true);
            $("#f"+(sno+1)).css("backgroundColor","green")
            if (data[$("#questions option:eq("+sno+")").text()].correct == $("#6D").text()) {
              scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>1</option>");
            } else {
              scores[sno] = 0;  scores[sno] = 1; $(".Economics option:eq("+sno+")").replaceWith("<option value='"+sno+"'>0</option>");
            }
          });
          $("#end6").click(() => {
       
            $('#showcorrection').show()
            $('#timer').hide()
            $('#keys6').hide()
            $('#title2').text("Correction & Explanation")
            $('#correction4').show()
          $('#correction6').show()
          $('#correction3').show()
          $('#correction').show()
          $('#correction6').show()
            $('#result').show()
            $("#end4").hide()
            $("#endbox6").hide()
            $("#end3").hide()
            $("#end2").hide()
            $("#end").hide() 
            $("#endbox5").hide() 
            let score1 = 0;
            let score2 =0;
            let score3 =0;
            let score4 =0;
            for(i=0;i<20;i++){
              score1=score1+parseInt($("."+"English"+" "+"option:eq("+i+")").text());
              score2=score2+parseInt($("."+$('#subs1 option:selected').text()+" "+"option:eq("+i+")").text());
              score3=score3+parseInt($("."+$('#subs2 option:selected').text()+" "+"option:eq("+i+")").text());
              score4=score4+parseInt($("."+$('#subs3 option:selected').text()+" "+"option:eq("+i+")").text());
            }
                  // Retrieved array
                
                            const sum =score1;
                            console.log("scores",sum)
                            $('#content').hide()
                            $('#result').show()
                            $('.studentdata').append(`<tr><td>English</td><td>${score1*5}</td></tr>`)
                           $('.studentdata').append(`<tr><td>${$('#subs1 option:selected').text()}</td><td>${score2*5}</td></tr>`)
                           $('.studentdata').append(`<tr><td>${$('#subs2 option:selected').text()}</td><td>${score3*5}</td></tr>`)
                           $('.studentdata').append(`<tr><td>${$('#subs3 option:selected').text()}</td><td>${score4*5}</td></tr>`)
                            let total=score1*5+score2*5+score2*5+score4*5;
                   var perf=parseInt($("#totalscore").text())/parseInt($("#testno").text());

                  
                          $('#result').append(`<center><h1>Total Score: ${(total)}%</h1>
                          <br/>Total Passed:${total}<br/>Total Failed:${(scores.length)*5*4-total}
                          <br><h3>No of Test:${parseInt($("#testno").text())}</h3><br><h3>Average Performance:${perf.toFixed(1)}</h3></center>`)
                            clearInterval(timer);
                           $.ajax({
                            url: "scores.php",
                            type: "POST",
                            data: {
                              username: localStorage.getItem("usercodecs"),
                              english: score1,
                              subject1: score2,
                              subject2: score3,
                              subject4: score4						
                            },
                            cache: false,
                            success: function(dataResult){
                                     
                              var dataResult = JSON.parse(dataResult);
                                $("#butsave").removeAttr("disabled");
                    
                              if(dataResult.statusCode==200){
                                console.log("successful")	
                              }
                              else if(dataResult.statusCode==201){
                                $("#error").show();
                                $('#error').html('Email ID already exists !');
                              }
                              
                            }
                          });
          
          });
          $("#showcorrection").click(() => {
            $('#content').show()
            $('#endbox6').hide()
            $('#correction1').empty();  $('#correction2').empty();  $('#correction3').empty();  $('#correction4').empty();  $('#correction5').empty();
            $('#correction6').empty();  $('#correction7').empty();  $('#correction8').empty();  $('#correction9').empty();
            $('#correction10').empty();  $('#correction11').empty();  $('#correction6').empty();
            $('#result').hide()
            $('#correction1').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction2').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction3').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction4').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction5').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction6').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction7').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction8').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction9').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction10').append(data[$("#questions option:eq("+0+")").text()].correction)
            $('#correction11').append(data[$("#questions option:eq("+0+")").text()].correction)
  });
          $("#f1").click(() => {
            $("#sno6").text("1");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+0+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+0+")").text()].optionD}</span>`);
            sno = 0;
          });
          $("#f2").click(() => {
            $("#sno6").text("2");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+1+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+1+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+1+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+1+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+1+")").text()].optionD}</span>`);
            sno = 1;
          });
          $("#f3").click(() => {
            $("#sno6").text("3");
         
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+2+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+2+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+2+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+2+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+2+")").text()].optionD}</span>`);
            sno = 2;
            $("#radio6B").prop("checked", true);
            $("header").scrollTop(1000)
          });
          $("#f4").click(() => {
            $("#sno6").text("4");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+3+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+3+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+3+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+3+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+3+")").text()].optionD}</span>`);
            sno = 3;
          });
          $("#f5").click(() => {
            $("#sno6").text("5");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+4+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+4+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+4+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+4+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+4+")").text()].optionD}</span>`);
            sno = 4;
          });
          $("#f6").click(() => {
            $("#sno6").text("6");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+5+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+5+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+5+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+5+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+5+")").text()].optionD}</span>`);
            sno = 5;
          });
          $("#f7").click(() => {
            $("#sno6").text("7");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+6+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+6+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+6+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+6+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+6+")").text()].optionD}</span>`);
            sno = 6;
          });
          $("#f8").click(() => {
            $("#sno6").text("8");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+7+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+7+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+7+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+7+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+7+")").text()].optionD}</span>`);
            sno = 7;
          });
          $("#f9").click(() => {
            $("#sno6").text("9");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+8+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+8+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+8+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+8+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+8+")").text()].optionD}</span>`);
            sno = 8;
          });
          $("#f10").click(() => {
            $("#sno6").text("10");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+9+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+9+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+9+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+9+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+9+")").text()].optionD}</span>`);
            sno = 9;
          });
          $("#f11").click(() => {
            $("#sno6").text("11");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+10+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+10+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+10+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+10+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+10+")").text()].optionD}</span>`);
            sno = 10;
          });
          $("#f12").click(() => {
            $("#sno6").text("12");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+11+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+11+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+11+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+11+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+11+")").text()].optionD}</span>`);
            sno = 11;
          });
          $("#f13").click(() => {
            $("#sno6").text("13");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+12+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+12+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+12+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+12+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+12+")").text()].optionD}</span>`);
            sno = 12;
          });
          $("#f14").click(() => {
            $("#sno6").text("14");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+13+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+13+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+13+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+13+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+13+")").text()].optionD}</span>`);
            sno = 13;
          });
          $("#f15").click(() => {
            $("#sno6").text("15");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+14+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+14+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+14+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+14+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+14+")").text()].optionD}</span>`);
            sno = 14;
          });
          $("#f16").click(() => {
            $("#sno6").text("16");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+15+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+15+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+15+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+15+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+15+")").text()].optionD}</span>`);
            sno = 15;
          });
          $("#f17").click(() => {
            $("#sno6").text("17");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+16+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+16+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+16+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+16+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+16+")").text()].optionD}</span>`);
            sno = 16;
          });
          $("#f18").click(() => {
            $("#sno6").text("18");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+17+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+17+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+17+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+17+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+17+")").text()].optionD}</span>`);
            sno = 17;
          });
          $("#f19").click(() => {
            $("#sno6").text("19");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+18+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+18+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+18+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+18+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+18+")").text()].optionD}</span>`);
            sno = 18;
          });
          $("#f20").click(() => {
            $("#sno6").text("20");
            $("#question6").empty();
            $("#question6").append(`<span>${data[$("#questions option:eq("+19+")").text()].question}</span>`);
            $("#6A").empty();
            $("#6A").append(`<span>${data[$("#questions option:eq("+19+")").text()].optionA}</span>`);
            $("#6B").empty();
            $("#6B").append(`<span>${data[$("#questions option:eq("+19+")").text()].optionB}</span>`);
            $("#6C").empty();
            $("#6C").append(`<span>${data[$("#questions option:eq("+19+")").text()].optionC}</span>`);
            $("#6D").empty();
            $("#6D").append(`<span>${data[$("#questions option:eq("+19+")").text()].optionD}</span>`);
            sno = 19;
          });
}

