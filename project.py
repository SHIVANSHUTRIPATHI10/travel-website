import seaborn as sns
import matplotlib.pyplot as plt

# Load sample datase
tips= sns.load_dataset("tips")
sns.pairplot(tips,vars=["total_bill","tip","size"],hue="sex")
plt.show()