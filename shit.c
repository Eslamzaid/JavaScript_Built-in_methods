// #include <cs50.h>
// #include <stdio.h>
// #include <string.h>
// int main(void)
// {
//     //checking
//     long credit_card_num;
//     int sum = 0;
//     int count = 0;

//     //input/user/card

//     do
//     {
//         credit_card_num = get_long_long("ENter YOur Credit Card NUmber: ");

//     } while(credit_card_num < 0);


//     //Cecking
//     long checkingCC = credit_card_num;
//     long div = 10;
//     //opreating1
//     while(checkingCC > 0)
//     {
//         int lastdig = checkingCC % 10;
//         sum = sum + lastdig;
//         checkingCC = checkingCC /100;
//     }
//     //opreating2
//     checkingCC = credit_card_num /10;
//     while(checkingCC >  0)
//     {
//         int lastdig = checkingCC % 10;
//         int timesTwo = lastdig * 2;
//         sum = sum + (timesTwo %10) + (timesTwo /10);
//         checkingCC = checkingCC /100;
//     }

//     //leg-of-num
//     checkingCC = credit_card_num;
//     while(checkingCC != 0)
//     {
//         checkingCC = checkingCC /10;
//         count++;
//     }

//     //Counting
//     for(int i = 0; i < count -2; i++)
//     {
//         div = div * 10;
//     }

//     int firstNum = credit_card_num / div;
//     int secondNum = credit_card_num / (div/10);

//     //Checker-brand

//     char result[13];
//     if (sum %10 == 0)
//     {
//         //AMX
//         if((secondNum == 37 || secondNum == 34) && (count == 15))
//         {
//             strcpy(result, "AMEX\n");
//         }

//         //VISA
//         else if(firstNum == 4 && (count == 13 || count == 16))
//         {
//             strcpy(result, "VISA\n");
//         }

//         // //Master
//          else if((secondNum>= 50 && secondNum <= 56) && count == 16)
//          {
//              strcpy(result, "MASTERCARD\n\n");
//          }
//          //invaled
//          else{
//             strcpy(result, "INVALID\n");

//          }

//          }else{
//             strcpy(result, "INVALID\n");

//          }

//          printf("%s\n", result);