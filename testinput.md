# BEGIN WORKSHEET

# DEFQ 'Q1'

What is the meaning of life?

# INPUT NUMBER

# SOLUTION 42

# ENDQ

# DEFQ 'Q2'

Write a sentence with 10 words.

# INPUT ONELINE

# SOLUTION 'iguodala to curry back to iguodala up for the layup'

# ENDQ

# DEFQ 'Q3'

Write a one-argument lambda function `f` that increments a number.

# INPUT -lang=Python ONELINE

# SOLUTION DOCTEST

> > > f(4)
> > > 4

# ENDQ

# DEFQ 'Q4'

Write a paragraph about how CS61A is the greatest course in the world.

# INPUT BOX

# ENDQ

# DEFQ 'Multiple Choice Question'

What is the first letter of the alphabet?

# INPUT MC RADIO A,B,C,D

# SOLUTION A

# ENDQ

# DEFQ 'Select-All Multiple Choice Question'

What is the first letter of the alphabet?

# INPUT MC SELECT A,B,C,D

# SOLUTION A

# ENDQ

# DEFQ 'What Would Python Do Question'

WWPD

# INPUT WWPD

3
'csm'
x = 3; x
#ENDQ

# DEFQ 'Code Writing Question'

Write a function `fib` that takes argument `n` and calculates the `n`-th fibonacci number.
Assume 1-indexed, i.e. You may use recursion or iteration.

# INPUT -lang=Python BOX

# SOLUTION -DOCTEST

> > > fib(1)
> > > 1
> > > fib(10)
> > > 55

# ENDQ

# END WORKSHEET
