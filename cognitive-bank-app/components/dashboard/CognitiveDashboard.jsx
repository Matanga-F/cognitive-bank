import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import { useTheme } from "../../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'expo-linear-gradient';
import CognitiveTransaction from "../../components/banking/transactions/CognitiveTransaction";

const { width } = Dimensions.get('window');

const CognitiveDashboard = ({
  onTransactionPress,
  onViewAllTransactions,
  onViewAllAccounts,
  onQuickAction,
  showNeuralInsights = true,
  showFinancialGoals = true,
  showSpendingCategories = true,
  userName = 'Customer',
}) => {
  const { theme, constants } = useTheme();
  
  const [refreshing, setRefreshing] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState('1');
  
  // Mock transactions data
  const [transactions] = useState([
    {
      id: '1',
      title: 'Salary Deposit',
      description: 'Monthly salary from Company Inc.',
      amount: 4500,
      type: 'income',
      status: 'completed',
      category: 'Salary',
      merchant: 'Company Inc.',
      date: new Date().toISOString(),
      neuralScore: 95,
    },
    {
      id: '2',
      title: 'Grocery Store',
      description: 'Weekly groceries at SuperMart',
      amount: 125.75,
      type: 'expense',
      status: 'completed',
      category: 'Food',
      merchant: 'SuperMart',
      date: new Date(Date.now() - 86400000).toISOString(),
      neuralScore: 75,
    },
    {
      id: '3',
      title: 'Investment Growth',
      description: 'Portfolio quarterly return',
      amount: 325.5,
      type: 'investment',
      status: 'completed',
      category: 'Investments',
      merchant: 'WealthFunds',
      date: new Date(Date.now() - 172800000).toISOString(),
      neuralScore: 88,
    },
    {
      id: '4',
      title: 'Netflix Subscription',
      description: 'Monthly entertainment subscription',
      amount: 15.99,
      type: 'payment',
      status: 'pending',
      category: 'Entertainment',
      merchant: 'Netflix',
      date: new Date(Date.now() - 259200000).toISOString(),
      neuralScore: 60,
    },
    {
      id: '5',
      title: 'Restaurant Dinner',
      description: 'Dinner at Italian Restaurant',
      amount: 85.25,
      type: 'expense',
      status: 'completed',
      category: 'Dining',
      merchant: 'La Bella Vita',
      date: new Date(Date.now() - 345600000).toISOString(),
      neuralScore: 45,
    },
  ]);

  // Mock account data
  const [accounts] = useState([
    { id: '1', name: 'Checking Account', balance: 12543.67, type: 'checking' },
    { id: '2', name: 'Savings Account', balance: 32500.5, type: 'savings' },
    { id: '3', name: 'Investment Portfolio', balance: 78920.25, type: 'investment' },
  ]);
  
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  // Handle refresh
  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      Alert.alert('Refreshed', 'Dashboard data updated');
    }, 1500);
  };

  // Quick actions
  const quickActions = [
    { id: 'transfer', label: 'Transfer', icon: 'swap-horizontal', color: theme.brand.primary },
    { id: 'pay', label: 'Pay', icon: 'credit-card', color: theme.status.info },
    { id: 'invest', label: 'Invest', icon: 'trending-up', color: theme.neural.primary },
    { id: 'scan', label: 'Scan', icon: 'qrcode-scan', color: theme.status.success },
  ];

  // Spending categories
  const spendingCategories = [
    { category: 'Food & Dining', amount: 325.75, percentage: 25, color: theme.financial.negative },
    { category: 'Shopping', amount: 189.5, percentage: 15, color: theme.brand.primary },
    { category: 'Entertainment', amount: 95.99, percentage: 8, color: theme.neural.primary },
    { category: 'Transport', amount: 78.25, percentage: 6, color: theme.status.info },
    { category: 'Other', amount: 587.51, percentage: 46, color: theme.text.tertiary },
  ];

  // Neural insights
  const neuralInsights = [
    { id: '1', title: 'High Savings Potential', description: 'You can save $250 more this month', score: 92 },
    { id: '2', title: 'Subscription Audit', description: '3 unused subscriptions detected', score: 85 },
    { id: '3', title: 'Investment Opportunity', description: 'Market conditions favorable', score: 78 },
  ];

  // Calculate totals
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const monthlyIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  const monthlyExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  // Handle transaction press
  const handleTransactionPress = (transactionId) => {
    if (onTransactionPress) {
      onTransactionPress(transactionId);
    } else {
      Alert.alert('Transaction', `Pressed transaction: ${transactionId}`);
    }
  };

  // Default handlers if not provided
  const handleViewAllTransactions = () => {
    if (onViewAllTransactions) {
      onViewAllTransactions();
    } else {
      Alert.alert('View All', 'Show all transactions');
    }
  };

  const handleViewAllAccounts = () => {
    if (onViewAllAccounts) {
      onViewAllAccounts();
    } else {
      Alert.alert('Accounts', 'Manage accounts');
    }
  };

  const handleQuickAction = (actionId) => {
    if (onQuickAction) {
      onQuickAction(actionId);
    } else {
      switch (actionId) {
        case 'transfer':
          Alert.alert('Quick Action', 'Transfer money');
          break;
        case 'pay':
          Alert.alert('Quick Action', 'Make a payment');
          break;
        case 'invest':
          Alert.alert('Quick Action', 'Invest money');
          break;
        case 'scan':
          Alert.alert('Quick Action', 'Scan QR code');
          break;
        case 'addAccount':
          Alert.alert('Quick Action', 'Add new account');
          break;
        default:
          Alert.alert('Quick Action', `Action: ${actionId}`);
      }
    }
  };

  const styles = createStyles(theme, constants);

  // Render account cards
  const renderAccountCards = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.accountsScroll}
      contentContainerStyle={styles.accountsContainer}
    >
      {accounts.map((account) => (
        <TouchableOpacity
          key={account.id}
          style={[
            styles.accountCard,
            selectedAccount === account.id && {
              borderColor: theme.neural.primary,
              borderWidth: 2,
            },
          ]}
          onPress={() => setSelectedAccount(account.id)}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[
              theme.gradients.primary[0],
              theme.gradients.primary[1],
            ]}
            style={styles.accountGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.accountHeader}>
              <Text style={styles.accountName}>
                {account.name}
              </Text>
              <Icon
                name={
                  account.type === 'checking'
                    ? 'bank'
                    : account.type === 'savings'
                    ? 'piggy-bank'
                    : 'chart-line'
                }
                size={20}
                color="#FFFFFF"
              />
            </View>
            <Text style={styles.accountBalance}>
              ${account.balance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text style={styles.accountType}>
              {account.type.charAt(0).toUpperCase() + account.type.slice(1)}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
      
      {/* Add Account Button */}
      <TouchableOpacity
        style={styles.addAccountCard}
        onPress={() => handleQuickAction('addAccount')}
        activeOpacity={0.7}
      >
        <Icon
          name="plus-circle"
          size={32}
          color={theme.text.secondary}
        />
        <Text style={styles.addAccountText}>
          Add Account
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );

  // Render quick actions
  const renderQuickActions = () => (
    <View style={styles.quickActionsContainer}>
      {quickActions.map((action) => (
        <TouchableOpacity
          key={action.id}
          style={styles.quickActionButton}
          onPress={() => handleQuickAction(action.id)}
          activeOpacity={0.7}
        >
          <LinearGradient
            colors={[action.color + '40', action.color + '20']}
            style={styles.quickActionGradient}
          >
            <Icon
              name={action.icon}
              size={24}
              color={action.color}
            />
          </LinearGradient>
          <Text style={styles.quickActionLabel}>
            {action.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Render neural insights
  const renderNeuralInsights = () => (
    <View style={styles.insightsContainer}>
      <View style={styles.sectionHeader}>
        <Icon
          name="brain"
          size={20}
          color={theme.neural.primary}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>
          Neural Insights
        </Text>
      </View>
      
      {neuralInsights.map((insight) => (
        <View
          key={insight.id}
          style={styles.insightCard}
        >
          <View style={styles.insightHeader}>
            <Text style={styles.insightTitle}>
              {insight.title}
            </Text>
            <View style={styles.neuralScoreBadge}>
              <Text style={styles.neuralScoreText}>
                {insight.score}
              </Text>
            </View>
          </View>
          <Text style={styles.insightDescription}>
            {insight.description}
          </Text>
        </View>
      ))}
    </View>
  );

  // Render spending categories
  const renderSpendingCategories = () => (
    <View style={styles.categoriesContainer}>
      <View style={styles.sectionHeader}>
        <Icon
          name="chart-pie"
          size={20}
          color={theme.financial.negative}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>
          Spending Categories
        </Text>
      </View>
      
      {spendingCategories.map((category, index) => (
        <View
          key={index}
          style={styles.categoryRow}
        >
          <View style={styles.categoryInfo}>
            <View
              style={[
                styles.categoryColor,
                { backgroundColor: category.color },
              ]}
            />
            <Text style={styles.categoryName}>
              {category.category}
            </Text>
          </View>
          
          <View style={styles.categoryAmounts}>
            <Text style={styles.categoryValue}>
              ${category.amount.toFixed(2)}
            </Text>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${category.percentage}%`,
                    backgroundColor: category.color,
                  },
                ]}
              />
            </View>
            <Text style={styles.categoryPercentage}>
              {category.percentage}%
            </Text>
          </View>
        </View>
      ))}
    </View>
  );

  // Render recent transactions
  const renderRecentTransactions = () => (
    <View style={styles.transactionsContainer}>
      <View style={styles.sectionHeader}>
        <Icon
          name="history"
          size={20}
          color={theme.text.primary}
          style={styles.sectionIcon}
        />
        <Text style={styles.sectionTitle}>
          Recent Transactions
        </Text>
        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={handleViewAllTransactions}
        >
          <Text style={styles.viewAllText}>
            View All
          </Text>
          <Icon
            name="chevron-right"
            size={16}
            color={theme.brand.primary}
          />
        </TouchableOpacity>
      </View>
      
      {transactions.map((transaction) => (
        <CognitiveTransaction
          key={transaction.id}
          {...transaction}
          onPress={() => handleTransactionPress(transaction.id)}
          showDetails={false}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View
        style={[
          styles.animatedHeader,
          { opacity: headerOpacity },
        ]}
      >
        <Text style={styles.headerTitle}>
          Cognitive Dashboard
        </Text>
      </Animated.View>

      <ScrollView
        style={styles.screen}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.neural.primary]}
            tintColor={theme.neural.primary}
          />
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeGreeting}>
            Good morning, {userName} 👋
          </Text>
          <Text style={styles.welcomeMessage}>
            Your financial intelligence at a glance
          </Text>
        </View>

        {/* Total Balance Card */}
        <LinearGradient
          colors={theme.gradients.neural}
          style={styles.totalBalanceCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.balanceLabel}>
            Total Balance
          </Text>
          <Text style={styles.balanceAmount}>
            ${totalBalance.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          
          <View style={styles.balanceStats}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>
                Income
              </Text>
              <Text style={styles.statValuePositive}>
                +${monthlyIncome.toFixed(2)}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>
                Expenses
              </Text>
              <Text style={styles.statValueNegative}>
                -${monthlyExpenses.toFixed(2)}
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>
                Net Flow
              </Text>
              <Text
                style={[
                  styles.statValue,
                  {
                    color:
                      monthlyIncome - monthlyExpenses > 0
                        ? theme.financial.positive
                        : theme.financial.negative,
                  },
                ]}
              >
                ${(monthlyIncome - monthlyExpenses).toFixed(2)}
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* Accounts Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Icon
              name="wallet"
              size={20}
              color={theme.brand.primary}
              style={styles.sectionIcon}
            />
            <Text style={styles.sectionTitle}>
              Your Accounts
            </Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={handleViewAllAccounts}
            >
              <Text style={styles.viewAllText}>
                Manage
              </Text>
            </TouchableOpacity>
          </View>
          {renderAccountCards()}
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Quick Actions
          </Text>
          {renderQuickActions()}
        </View>

        {/* Neural Insights */}
        {showNeuralInsights && renderNeuralInsights()}

        {/* Spending Categories */}
        {showSpendingCategories && renderSpendingCategories()}

        {/* Recent Transactions */}
        {renderRecentTransactions()}

        {/* Bottom Spacing */}
        <View style={{ height: constants.spacing.xxl }} />
      </ScrollView>
    </View>
  );
};

const createStyles = (theme, constants) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.primary,
  },
  screen: {
    flex: 1,
  },
  animatedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: theme.background.primary,
    paddingTop: constants.spacing.lg,
    paddingBottom: constants.spacing.md,
    paddingHorizontal: constants.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.ui.border.primary,
  },
  headerTitle: {
    fontSize: constants.typography.heading2,
    fontWeight: '700',
    color: theme.text.primary,
    textAlign: 'center',
  },
  welcomeSection: {
    paddingHorizontal: constants.spacing.md,
    paddingTop: constants.spacing.xl,
    paddingBottom: constants.spacing.lg,
  },
  welcomeGreeting: {
    fontSize: constants.typography.heading1,
    fontWeight: '700',
    color: theme.text.primary,
    marginBottom: constants.spacing.xs,
  },
  welcomeMessage: {
    fontSize: constants.typography.body,
    color: theme.text.secondary,
    opacity: 0.9,
  },
  totalBalanceCard: {
    marginHorizontal: constants.spacing.md,
    marginBottom: constants.spacing.lg,
    padding: constants.spacing.lg,
    borderRadius: constants.components.card.borderRadius,
    shadowColor: theme.neural.glow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  balanceLabel: {
    fontSize: constants.typography.body,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: constants.spacing.xs,
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: constants.spacing.lg,
  },
  balanceStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: constants.typography.caption,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: constants.spacing.xs,
  },
  statValue: {
    fontSize: constants.typography.body,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statValuePositive: {
    fontSize: constants.typography.body,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statValueNegative: {
    fontSize: constants.typography.body,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.9,
  },
  sectionContainer: {
    paddingHorizontal: constants.spacing.md,
    marginBottom: constants.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: constants.spacing.md,
  },
  sectionIcon: {
    marginRight: constants.spacing.sm,
  },
  sectionTitle: {
    fontSize: constants.typography.heading2,
    fontWeight: '600',
    color: theme.text.primary,
    flex: 1,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: constants.typography.caption,
    color: theme.brand.primary,
    fontWeight: '600',
    marginRight: constants.spacing.xs,
  },
  accountsScroll: {
    marginHorizontal: -constants.spacing.md,
  },
  accountsContainer: {
    paddingHorizontal: constants.spacing.md,
    paddingRight: constants.spacing.lg,
  },
  accountCard: {
    width: width * 0.65,
    height: 180,
    borderRadius: constants.components.card.borderRadius,
    marginRight: constants.spacing.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.ui.border.primary,
  },
  accountGradient: {
    flex: 1,
    padding: constants.spacing.lg,
    justifyContent: 'space-between',
  },
  accountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountName: {
    fontSize: constants.typography.body,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
    marginRight: constants.spacing.sm,
  },
  accountBalance: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginVertical: constants.spacing.sm,
  },
  accountType: {
    fontSize: constants.typography.caption,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  addAccountCard: {
    width: width * 0.65,
    height: 180,
    borderRadius: constants.components.card.borderRadius,
    marginRight: constants.spacing.md,
    backgroundColor: theme.background.secondary,
    borderWidth: 1,
    borderColor: theme.ui.border.primary,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAccountText: {
    fontSize: constants.typography.body,
    color: theme.text.secondary,
    marginTop: constants.spacing.sm,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    alignItems: 'center',
  },
  quickActionGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: constants.spacing.sm,
  },
  quickActionLabel: {
    fontSize: constants.typography.caption,
    color: theme.text.secondary,
  },
  insightsContainer: {
    marginBottom: constants.spacing.xl,
    paddingHorizontal: constants.spacing.md,
  },
  insightCard: {
    backgroundColor: theme.background.card,
    borderRadius: constants.components.card.borderRadius,
    padding: constants.spacing.md,
    marginBottom: constants.spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: theme.neural.primary,
  },
  insightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: constants.spacing.xs,
  },
  insightTitle: {
    fontSize: constants.typography.body,
    fontWeight: '600',
    color: theme.text.primary,
    flex: 1,
  },
  neuralScoreBadge: {
    backgroundColor: theme.neural.primary,
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.xs / 2,
    borderRadius: constants.borderRadius.sm,
  },
  neuralScoreText: {
    fontSize: constants.typography.caption,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  insightDescription: {
    fontSize: constants.typography.caption,
    color: theme.text.secondary,
  },
  categoriesContainer: {
    marginBottom: constants.spacing.xl,
    paddingHorizontal: constants.spacing.md,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: constants.spacing.md,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: constants.spacing.sm,
  },
  categoryName: {
    fontSize: constants.typography.body,
    color: theme.text.primary,
  },
  categoryAmounts: {
    alignItems: 'flex-end',
  },
  categoryValue: {
    fontSize: constants.typography.body,
    fontWeight: '600',
    color: theme.text.primary,
    marginBottom: constants.spacing.xs,
  },
  progressBar: {
    width: 100,
    height: 4,
    backgroundColor: theme.background.tertiary,
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: constants.spacing.xs,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  categoryPercentage: {
    fontSize: constants.typography.caption,
    color: theme.text.secondary,
  },
  transactionsContainer: {
    paddingHorizontal: constants.spacing.md,
  },
});

export default CognitiveDashboard;