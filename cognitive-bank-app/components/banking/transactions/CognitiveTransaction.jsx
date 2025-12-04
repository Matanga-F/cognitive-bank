import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useTheme } from "../../../theme/ThemeProvider";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CognitiveTransaction = ({
  title,
  description,
  amount,
  currency = '$',
  type,
  status,
  category,
  merchant,
  date,
  time,
  icon,
  showDetails = true,
  onPress,
  onLongPress,
  showBorder = true,
  showStatus = true,
  isHighlighted = false,
  neuralScore,
}) => {
  const { theme, constants } = useTheme();

  // Get icon based on transaction type
  const getTransactionIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'income':
        return 'arrow-down-bold';
      case 'expense':
        return 'arrow-up-bold';
      case 'transfer':
        return 'swap-horizontal';
      case 'investment':
        return 'trending-up';
      case 'payment':
        return 'credit-card';
      case 'refund':
        return 'refresh';
      default:
        return 'cash';
    }
  };

  // Get icon color based on type
  const getIconColor = () => {
    switch (type) {
      case 'income':
        return theme.financial.positive;
      case 'expense':
        return theme.financial.negative;
      case 'transfer':
        return theme.brand.primary;
      case 'investment':
        return theme.neural.primary;
      case 'payment':
        return theme.status.info;
      case 'refund':
        return theme.status.success;
      default:
        return theme.text.secondary;
    }
  };

  // Get status color and icon
  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
        return {
          color: theme.status.success,
          icon: 'check-circle',
          text: 'Completed',
        };
      case 'pending':
        return {
          color: theme.status.warning,
          icon: 'clock-outline',
          text: 'Pending',
        };
      case 'failed':
        return {
          color: theme.status.error,
          icon: 'close-circle',
          text: 'Failed',
        };
      case 'reversed':
        return {
          color: theme.text.secondary,
          icon: 'refresh',
          text: 'Reversed',
        };
      default:
        return {
          color: theme.text.secondary,
          icon: 'help-circle',
          text: 'Unknown',
        };
    }
  };

  // Format amount with sign
  const formatAmount = () => {
    const sign = type === 'income' || type === 'refund' ? '+' : '-';
    const formattedAmount = Math.abs(amount).toFixed(2);
    return `${sign}${currency}${formattedAmount}`;
  };

  // Format date
  const formatDate = () => {
    const now = new Date();
    const transactionDate = new Date(date);
    const diffTime = Math.abs(now.getTime() - transactionDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today' + (time ? `, ${time}` : '');
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return transactionDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    }
  };

  // Get neural indicator color based on score
  const getNeuralColor = () => {
    if (!neuralScore) return 'transparent';
    
    if (neuralScore > 80) return theme.neural.primary;
    if (neuralScore > 60) return theme.status.success;
    if (neuralScore > 40) return theme.status.info;
    if (neuralScore > 20) return theme.status.warning;
    return theme.status.error;
  };

  const statusConfig = getStatusConfig();
  const formattedAmount = formatAmount();
  const formattedDate = formatDate();
  const iconName = getTransactionIcon();
  const iconColor = getIconColor();
  const neuralColor = getNeuralColor();

  const TransactionContainer = onPress || onLongPress ? TouchableOpacity : View;

  const styles = createStyles(theme, constants);

  return (
    <TransactionContainer
      style={[
        styles.card,
        isHighlighted && {
          borderColor: theme.neural.primary,
          borderWidth: 2,
          backgroundColor: theme.neural.glow + '20',
        },
        showBorder && {
          borderColor: theme.ui.border.primary,
          borderWidth: 1,
        },
        {
          flexDirection: 'row',
          alignItems: 'center',
          padding: constants.spacing.md,
          marginBottom: constants.spacing.sm,
        },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.7}
    >
      {/* Neural Relevance Indicator */}
      {neuralScore !== undefined && (
        <View
          style={[
            styles.neuralIndicator,
            { backgroundColor: neuralColor },
          ]}
        />
      )}

      {/* Icon */}
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: iconColor + '20' },
        ]}
      >
        <Icon
          name={iconName}
          size={20}
          color={iconColor}
          style={styles.icon}
        />
      </View>

      {/* Transaction Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.headerRow}>
          <Text
            style={[
              styles.title,
              { color: theme.text.primary },
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.amount,
              {
                color:
                  type === 'income' || type === 'refund'
                    ? theme.financial.positive
                    : theme.financial.negative,
                fontWeight: '600',
              },
            ]}
          >
            {formattedAmount}
          </Text>
        </View>

        {/* Merchant/Category */}
        {(merchant || category) && (
          <View style={styles.infoRow}>
            {merchant && (
              <Text
                style={[
                  styles.merchant,
                  { color: theme.text.secondary },
                ]}
                numberOfLines={1}
              >
                {merchant}
              </Text>
            )}
            {category && (
              <View style={styles.categoryBadge}>
                <Text
                  style={[
                    styles.categoryText,
                    { color: theme.text.tertiary },
                  ]}
                >
                  {category}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Description */}
        {description && showDetails && (
          <Text
            style={[
              styles.description,
              { color: theme.text.tertiary },
            ]}
            numberOfLines={2}
          >
            {description}
          </Text>
        )}

        {/* Footer */}
        <View style={styles.footerRow}>
          {/* Date */}
          <View style={styles.dateContainer}>
            <Icon
              name="calendar"
              size={12}
              color={theme.text.tertiary}
              style={styles.footerIcon}
            />
            <Text
              style={[
                styles.dateText,
                { color: theme.text.tertiary },
              ]}
            >
              {formattedDate}
            </Text>
          </View>

          {/* Status */}
          {showStatus && (
            <View
              style={[
                styles.statusContainer,
                { backgroundColor: statusConfig.color + '20' },
              ]}
            >
              <Icon
                name={statusConfig.icon}
                size={12}
                color={statusConfig.color}
                style={styles.footerIcon}
              />
              <Text
                style={[
                  styles.statusText,
                  { color: statusConfig.color },
                ]}
              >
                {statusConfig.text}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Quick Actions */}
      {onPress && (
        <Icon
          name="chevron-right"
          size={20}
          color={theme.text.tertiary}
          style={styles.chevron}
        />
      )}
    </TransactionContainer>
  );
};

const createStyles = (theme, constants) => StyleSheet.create({
  card: {
    backgroundColor: theme.background.card,
    borderRadius: constants.components.card.borderRadius,
    padding: constants.components.card.padding,
    marginVertical: constants.spacing.sm,
    shadowColor: theme.ui.shadow.medium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  neuralIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderTopLeftRadius: constants.borderRadius.sm,
    borderBottomLeftRadius: constants.borderRadius.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: constants.spacing.md,
  },
  icon: {
    // Icon styling
  },
  detailsContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: constants.spacing.xs,
  },
  title: {
    flex: 1,
    marginRight: constants.spacing.sm,
    fontWeight: '500',
    fontSize: constants.typography.body,
  },
  amount: {
    fontWeight: '600',
    fontSize: constants.typography.body,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: constants.spacing.xs,
  },
  merchant: {
    flex: 1,
    marginRight: constants.spacing.sm,
    fontSize: constants.typography.caption,
  },
  categoryBadge: {
    backgroundColor: theme.background.tertiary,
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.xs / 2,
    borderRadius: constants.borderRadius.xs,
  },
  categoryText: {
    fontSize: constants.typography.tiny,
  },
  description: {
    marginBottom: constants.spacing.xs,
    lineHeight: 16,
    fontSize: constants.typography.caption,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: constants.spacing.xs,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIcon: {
    marginRight: constants.spacing.xs,
  },
  dateText: {
    fontSize: constants.typography.tiny,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.xs / 2,
    borderRadius: constants.borderRadius.xs,
  },
  statusText: {
    fontSize: constants.typography.tiny,
    fontWeight: '500',
  },
  chevron: {
    marginLeft: constants.spacing.sm,
  },
});

export default CognitiveTransaction;