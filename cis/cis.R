library(dplyr)
dates <- seq(as.Date("2023-01-01"), as.Date("2023-04-10"), by = "days")
values <- sample(600:1000, size = 100)
df <- data.frame(date = dates,
                 orders = values)
write.csv(df, "./cis.csv", row.names = F)
df <- df[order(df$orders),]

X_sample <- df$orders

N <- length(X_sample) # Number of members in X_sample
n_groups = (1000 - 600 ) / 40


h <- 40 # Hist step
Z <- seq(from = min(X_sample),
         to = max(X_sample),
         by = h) # Hist boundaries



X <- (Z[-1] + Z[-length(Z)]) / 2 # Hist centers
table_cut <- data.frame(values = X_sample,
                        groups = cut(X_sample, n_groups)) 


table_hist <- table_cut %>%
  dplyr::group_by(groups) %>%
  dplyr::summarise(abs_freq = n(),
                   rel_freq = n()/N)

table_hist[1:2]
H <- -sum(table_hist$rel_freq * log2(table_hist$rel_freq))
p <- table_hist$rel_freq
M <- sum(X * p)
D <- sum((X**2) * p) - sum((X * p)**2)

