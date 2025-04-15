import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import ItemDialog from '@/components/items/ItemDialog';
import store from '@/store/store';

describe('ItemDialog - Add Item', () => {
  const onOpenChange = vi.fn();
  const onPageChange = vi.fn();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <ItemDialog
          open={true}
          onOpenChange={onOpenChange}
          selectedItem={undefined}
          onPageChange={onPageChange}
        />

      </Provider>
    );
  });

  it('renders empty form fields in add mode except date', () => {
    const priceInput = screen.getByLabelText(/price/i) as HTMLInputElement;
    const stockInput = screen.getByLabelText(/stock/i) as HTMLInputElement;
    const ratingInput = screen.getByLabelText(/rating/i) as HTMLInputElement;
    const dateInput = screen.getByLabelText(/date/i) as HTMLInputElement;
    
    expect(priceInput.value).toBe('');
    expect(stockInput.value).toBe('');
    expect(ratingInput.value).toBe('');
    expect(dateInput.value).not.toBe('');
  });

  it('shows validation errors if submitted empty (excluding date)', async () => {
    // کلیک روی دکمه ارسال فرم
    fireEvent.click(screen.getByRole('button', { name: /add item/i }));
    
    // بررسی ارورهای مورد انتظار
    expect(await screen.findByText(/title is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/category is required/i)).toBeInTheDocument();
    // انتظار نداریم ارور تاریخ دیده شود، چون مقدار پیش‌فرض دارد
    expect(await screen.findByText(/price is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/description is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/stock is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/rating is required/i)).toBeInTheDocument();
  });
  

  
});
