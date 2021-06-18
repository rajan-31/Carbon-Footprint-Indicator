# Carbon-Footprint-Indicator

**Short Description**
##
**-What's the problem?**
Over the past two centuries, mankind has increased the concentration of CO2 in the atmosphere from 280 to more than 380 parts per million by volume, and it is growing faster every day. As the concentration of CO2 has risen, so has the average temperature of the planet.The Ecological Footprint framework addresses climate change in a comprehensive way beyond measuring carbon emissions. It shows how carbon emissions compare and compete with other human demands on our planet, such as food, fibers, timber etc.

**-How can technology help?**
Customers buying the products via websites could check the CO2 emission rate produced by the respective products and try to minimize the utilization of the products that cause high CO2 emission rate just contributing to sustainable development and improve the climatic behaviours.

**-The idea**
Create a Chrome extension to show Carbon Emission of the products that are viewed by the customer on E-commerce websites so that they could be made aware of their contribution of carbon footprints and they could make a better choice with respect to the sustainable development(like Amazon.in).
#
**Video**
#
**Architecture**

![image](https://user-images.githubusercontent.com/78497037/122595098-8d9c7180-d085-11eb-865c-dfd957f4b951.png)



#
**Long Description**
 
  A Product's Carbon Footprint (PCF) is essential to understanding how that particular product impacts the environment. PCFs provide valuable insight into the greenhouse gas emissions across the entire lifecycle of a product to make actionable changes.
  Digital tools and services are an integral part of our lives. It’s hard to imagine a life without smartphones, apps, Wikipedia, online banking, route planners with GPS and having a huge selection of music and movies at your fingertips pretty much everywhere, around the clock. All of these things make our lives so much easier. 
  But the carbon footprint of electronics, including smartphones, is about 3.7% of global greenhouse emissions, around 14 ounces of carbon dioxide per person each year. The tricky part of calculating electronic emissions is that we often think of their impact in terms of either their creation and usage. To more accurately estimate the influence of these gadgets, we must consider the whole life cycle of the product.
   In this project we are developing and training a Machine Learning model which can give us Carbon Emission of a particular product.

 + **Key Aspects:**

-Watson Studio:
IBM’s software platform for data science. One can create a project with a group of collaborators, all having access to various analytics models and using various languages (R/Python/Scala). Watson Studio brings together staple open source tools including RStudio, Spark and Python in an integrated environment, along with additional tools such as a managed Spark service and data shaping facilities, in a secure and governed environment.

-IBM Object Storage:
IBM Cloud Object Storage supports exponential data growth and cloud-native workloads with built-in high-speed file transfer capabilities, cross-region offerings and integrated services. The IBM Aspera high-speed data transfer option makes it easy to transfer data, and flexible storage class tiers help manage costs while meeting data access needs.

-IBM Machine Learning Service
It allows users to Deploy any models including machine learning and deep learning models and decision optimization models,dynamically retrain models with continuous learning
and automatically generate APIs to build AI-powered applications through DevOps.

-XGBoost for Regression
Extreme Gradient Boosting (XGBoost) is an open-source library that provides an efficient and effective implementation of the gradient boosting algorithm.
Regression predictive modeling problems involve predicting a numerical value such as a dollar amount or a height. XGBoost can be used directly for regression predictive modeling.

+ **The basic Workflow of the project would be:**

![image](https://user-images.githubusercontent.com/78497037/122598966-37cac800-d08b-11eb-8815-49f062132b7c.png)




#
**Project Roadmap**
The project currently involves the following:
1. Retrieve product details from the E-Commerce website (example:Amazon) through Web Scraping.
2. Build and deploy ML model(using XGBRegressor algorithm) into IBM Cloud(Watson Studio, Object Storage)  and configure it into an API.
3. Create a Chrome extension that could access the API created to use the ML model deployed on IBM Cloud.
4. Render the calculated data (CO2 emission) of the product to the front-end .

#
**Getting Started**
#
**Live demo**
#
**Built with**

- BM Watson Studio
- IBM Object Storage
- IBM Machine Learning Service
- Algorithm used: XGBRegressor

<!-- 
#
**Contributing**
#
**Versioning** -->
#
**Authors**
+ [Vaishnavi Sriramoju]
(https://github.com/vaishnavii-s)
+ [Dhruva Mhatre]
(https://github.com/Dhruva2105)
+ [Rajan Khade]
(https://github.com/rajan-31)
+ [Chirag Jain]
(https://github.com/ChiragJain99)
<!-- #
**Licensing**
#
**Acknowledgements** -->



