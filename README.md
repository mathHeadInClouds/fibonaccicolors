# fibonaccicolors
create infinite sequence of RGB colors, as far apart as possible.
very simple but effective - just 24 lines of code.
generateColor(0), generateColor(1), ... are the colors.

If you want to tweek/customize it:

alpha, beta, gamma must all be between 0 and 1,
they must be irrational, and their respective ratios must be irrational also.
further, when written as a continued fraction, the integer coefficients of that
should be small, such as, all ones and twos. If you choose other constants
alpha, beta, gamma wrt above conditions, you'll get a different 'flavor' of
colors, but the 'as far apart as possible' part will stay with you, that is
a consequence of those conditions of those constants. Another thing you can
do to 'get a different flavor' is start with an offset, as in
color0=generateColor(42), color1=generateColor(43), etc. But no gaps, that
would break it.

brightnessFactor: must be positive floating point number
1 is 'neutral', greater 1 makes it brighter, less than 1 makes is darker.
0 would give all black all the time.
