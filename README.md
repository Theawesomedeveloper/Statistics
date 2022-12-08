
# Statistics

This is Intrinsic Stat Class that performs basic [https://www.cuemath.com/data/descriptive-statistics/](Descriptive-Statistics)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Theawesomedeveloper/Statistics.git
```

Go to the project directory

```bash
  cd Statistics
```

Run the code

```bash
node statistics.js
```
## Statistics Reference

### **Note**: All methods in the Stat class takes values in two ways
### 1. 
You can passing in an array provided you use the spread syntax
#### Example
```javascript
const numbers = [1, 4, 6, 1, 8, 15, 18, 1, 5, 1]

Stat.variance(...numbers);
// Notice how the numbers array was spread into the method 
```
### 2. 
or you can pass in values seperated by commas
#### Example
```javascript
Stat.variance(1, 4, 6, 1, 8, 15, 18, 1, 5, 1);
// Notice how the numbers are passed in
```
## **Mean**
#### Example
```javascript
  Stat.mean(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Median**
#### Example
```javascript
  Stat.median(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Mode**
#### Example
```javascript
  Stat.mode(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Median**
#### Example
```javascript
  Stat.median(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Range**
#### Example
```javascript
  Stat.range(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Standard Deviation**
#### Example
```javascript
  Stat.standardDeviation(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Quartile Deviation**
#### Example
```javascript
  Stat.quartileDeviation(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Mean Deviation**
#### Example
```javascript
  Stat.meanDeviation(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


## **Variance**
#### Example
```javascript
  Stat.variance(...array)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `array` | `Int` | **Required**. Your array of numbers |


